"use server";

import nodemailer from "nodemailer";

export type EnquiryState = { ok: boolean; message: string };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const name = oneLine(String(formData.get("name") ?? ""));
  const email = oneLine(String(formData.get("email") ?? ""));
  const phone = oneLine(String(formData.get("phone") ?? ""));
  const interest = oneLine(String(formData.get("interest") ?? ""));
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return { ok: false, message: "Please enter your name, a valid email and a message." };
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const to = process.env.ENQUIRY_TO || "novagerman@outlook.de";

  if (!user || !pass) {
    console.error("Enquiry not sent: GMAIL_USER / GMAIL_APP_PASSWORD are not set in .env.local");
    return { ok: false, message: "Sorry, we could not send your enquiry right now. Please contact us by phone or WhatsApp." };
  }

  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });

  try {
    await transporter.sendMail({
      from: `"Novaglobalpath Website" <${user}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry from ${name}${interest ? ` – ${interest}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nInterested in: ${interest || "-"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <h2 style="color:#0b2a5b;margin:0 0 12px">New website enquiry</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:6px 0;color:#64748b;width:140px">Name</td><td><strong>${esc(name)}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#64748b">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#64748b">Phone / WhatsApp</td><td>${esc(phone) || "-"}</td></tr>
            <tr><td style="padding:6px 0;color:#64748b">Interested in</td><td>${esc(interest) || "-"}</td></tr>
          </table>
          <h3 style="color:#0b2a5b;margin:20px 0 6px">Message</h3>
          <p style="white-space:pre-wrap;margin:0">${esc(message)}</p>
        </div>`,
    });
  } catch (err) {
    console.error("Enquiry email failed", err);
    return { ok: false, message: "Sorry, we could not send your enquiry right now. Please try again or contact us on WhatsApp." };
  }

  return { ok: true, message: "Thank you! Your enquiry has been received. We will contact you soon." };
}
