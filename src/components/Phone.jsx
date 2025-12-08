import React from "react";

function Phone() {
  return (
    <div className=" umkas bg-[#5937E0] w-300 h-100 rounded-3xl flex justify-center gap-[124px] pl-5">
      <img
        className="tkt w-[267px] h-[540px]"
        src="/src/assets/png/phone2.png"
        alt=""
      />
      <div className="bata">
        <h4 className="text-white text-[16px] font-normal">Download our app</h4>
        <h1 className="text-white text-[50px] font-bold">Download our app</h1>
        <p className="p-1 w-[600px] text-[#ffffffd3] text-[16px] font-normal">
          Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
          semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
          vulputate. Nulla nam eget urna fusce vulputate at risus
        </p>
            <div className="flex gap-5">
              <a href="https://www.apple.com/app-store/">
              <button className="btn-1 w-[170px] h-[50px] bg-[white] text-white border-none outline-none flex items-center justify-center gap-3 rounded-md cursor-pointer">
                <img src="/src/assets/svg/apple1.svg" alt="" />
                <span>
                  <p className="text-[12px] text-[black] font-normal ">Downoload on the</p>
                  <p className="text-[22px] text-black font-semibold">App Store</p>
                </span>
              </button>
            </a>
            <a href="https://play.google.com/store/games?hl=ru">
              <button className="btn-2 w-[170px] h-[50px] bg-[white] text-white border-none outline-none flex items-center justify-center gap-3 rounded-md cursor-pointer">
                <img src="/src/assets/svg/googlePlay.svg" alt="" />
                <span className="flex flex-col justify-start">
                  <p className="text-[12px] text-[black] font-normal ">GET IT ON</p>
                  <p className="text-[20px] text-[black] font-semibold">Google Play</p>
                </span>
              </button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Phone;
