import Contact from "@/components/home/contact-us";
import HeroSection from "@/components/home/hero-section";
import OurPartners from "@/components/home/OurPartners";
import Pricing from "@/components/home/pricing";
import Products from "@/components/home/Products";
import WhatMakeUsDifferent from "@/components/home/WhatMakeUsDifferent";
import Categories from "@/components/home/Categories";
import Testimonial from "@/components/home/Testimonial";
import Markets from "@/components/home/Markets";
import Articles from "@/components/home/articles";
import OurSpecialty from "@/components/home/OurSpecialty";
import BacktestResult from "@/components/home/BacktestResult";
import BestForexEA from "@/components/home/BestForexEA";
import AnimatedBuyNow from "@/components/home/AnimatedBuyNow";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BestForexEA />
      <WhatMakeUsDifferent />
      <OurSpecialty />
      <div className="bg-[url('/assets/home/backtest-result/performance_bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="w-full bg-black/80">
          <BacktestResult />
          <Testimonial />
        </div>
      </div>
      <Pricing />
      <Articles />
      <AnimatedBuyNow />
      <OurPartners />
    </>
  );
}
