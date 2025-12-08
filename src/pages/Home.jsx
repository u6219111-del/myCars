import React from "react";
import Book from "../components/papks/Book";
import Small from "../components/papks/Small";
import Block from "../components/papks/Block";
import MyCar from "../components/papks/MyCar";
import Facts from "../components/papks/facts";
import Inputs from "../components/papks/Inputs";
function Home() {
  return (
    <div className="flex flex-col items-center gap-[80px] pt-[20px]">
      <Book />
      <Small />
      <Block />
      <MyCar />
      <Facts />
      <section className="flex items-center justify-evenly">
        <div className="flex flex-col gap-[45px]">
          <h1 className="text-5xl font-bold w-[313px]">Download mobile app</h1>
          <p className="text-[16px] font-normal w-[536px] text-[#00000099]">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna
          </p>
          <div className="flex items-center gap-10">
            <a href="https://www.apple.com/app-store/">
              <button className="w-[170px] h-[50px] bg-[black] text-white border-none outline-none flex items-center justify-center gap-3 rounded-md cursor-pointer">
                <img src="/src/assets/svg/apple.svg" alt="" />
                <span>
                  <p className="text-[12px] font-normal ">Downoload on the</p>
                  <p className="text-[22px] font-semibold">App Store</p>
                </span>
              </button>
            </a>
            <a href="https://play.google.com/store/games?hl=ru">
              <button className="w-[170px] h-[50px] bg-[black] text-white border-none outline-none flex items-center justify-center gap-3 rounded-md cursor-pointer">
                <img src="/src/assets/svg/googlePlay.svg" alt="" />
                <span className="flex flex-col justify-start">
                  <p className="text-[12px] font-normal ">GET IT ON</p>
                  <p className="text-[20px] font-semibold">Google Play</p>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img src="/src/assets/png/phone1.png" alt="" />
        </div>
      </section>
      <Inputs/>
    </div>
    
  );
}

export default Home;
