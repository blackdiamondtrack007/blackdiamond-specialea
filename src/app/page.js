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

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatMakeUsDifferent />
      <OurSpecialty />
      <Articles />
      {/* <Pricing /> */}
      <Testimonial />
      <OurPartners />
    </>
  );
}
