import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import CarSlider from "../../components/CarSlider/CarSlider";
import Features from "../../components/Features/Features";
import Facts from "../../components/Facts/Facts";
import PricingTable from "../../components/PricingTable/PricingTable";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import Partners from "../../components/Partners/Partners";
import CTA from "../../components/CTA/CTA";
import Newsletter from "../../components/Newsletter/Newsletter";

function Home() {
  return (
    <div className="home-page">
      <HeroBanner />
      <SearchFilter />
      <CarSlider />
      <Features />
      <Facts />
      <PricingTable />
      <TestimonialSlider />
      <Partners />
      <CTA />
      <Newsletter />
    </div>
  );
}

export default Home;
