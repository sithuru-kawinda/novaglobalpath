import HeroSlider from "@/components/HeroSlider";
import ServiceGrid from "@/components/ServiceGrid";
import WhyChoose from "@/components/WhyChoose";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import TargetMarkets from "@/components/TargetMarkets";
import { CtaBand } from "@/components/ui";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <div id="services" className="scroll-mt-16">
        <ServiceGrid />
      </div>

      <WhyChoose />

      <TargetMarkets />

      <Partners />

      <Reviews />

      <CtaBand />
    </>
  );
}
