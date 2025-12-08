import React from "react";
import "./Inputs.css"
function Inputs() {
  return (
    <div className=" umka bg-[#5937E0] w-300 h-100 rounded-3xl flex flex-col gap-[30px] pl-5">

      <h1 className="text-5xl text-[#FFFFFF] font-bold w-[606px] mt-3.5">
        Enjoy every mile with adorable companionship.
      </h1>
      <p className="text-[16px] font-normal w-[550px] text-[white]">
        Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
        bibendum ullamcorper in. Diam tincidunt tincidunt erat
      </p>
      <div className="w-[464px] h-[60px] bg-[white] rounded-[17px] flex items-center justify-center">
        <input
          className="w-[320px] h-[35px] border-none outline-none"
          type="text"
          placeholder="Введите город :"
        />
        <button className="w-[111px] h-[40px] bg-[#FF9E0C] text-[white] rounded-[15px] cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
}

export default Inputs;
