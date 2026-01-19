import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Features from "../../components/Features/Features";
import Facts from "../../components/Facts/Facts";
import PricingTable from "../../components/PricingTable/PricingTable";
import Partners from "../../components/Partners/Partners";
import CTA from "../../components/CTA/CTA";
import Newsletter from "../../components/Newsletter/Newsletter";
import MyCar from "../../components/myCar/MyCar";

function Home() {
  return (
    <div className="home-page">
      <HeroBanner/>
      <MyCar/>
      <Features />
      <Facts />
      <PricingTable />
      <Partners />
      <CTA />
      <Newsletter />
    </div>
  );
}

export default Home;
