import React from "react";
import Hero from "../../components/Hero/Hero";
import Book from "../../components/Book/Book";
import Small from "../../components/Small/Small";
import Block from "../../components/Block/Block";
import MyCar from "../../components/myCar/MyCar";
import Facts from "../../components/Facts/Facts";
import Inputs from "../../components/Inputs/Inputs";
import Add from "../Add/Add";
import FAQ from "../Faq/FAQ";



function Home() {


  return (
    <div className="flex flex-col items-center gap-[80px] pt-[20px]">
      <Hero />
      <Book />
      <Small />
      <Block />
      <MyCar />
      <Facts />
      <Add/>
      <Inputs/>
    </div>
  );
}

export default Home;