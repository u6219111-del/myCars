import React from "react";

function Small() {
  return (
    <div className="w-[1220px] h-[314px] flex justify-around items-center ">
      <div className="w-[357px] h-[194px] flex items-center justify-center flex-col gap-5">
        <img src="/src/assets/svg/location.svg" alt="" />
        <h2 className="text-center text-[24px] font-600">Availability</h2>
        <p className="text-center text-[16px] font-400">
          Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
        </p>
      </div>
      <div className="w-[357px] h-[194px] flex items-center justify-center flex-col gap-5">
        <img src="/src/assets/svg/mashina.svg" alt="" />
        <h2 className="text-center text-[24px] font-600">Comfort</h2>
        <p className="text-center text-[16px] font-400">
          Gravida auctor fermentum morbi vulputate ac egestas orcietium
          convallis
        </p>
      </div>
      <div className="w-[357px] h-[194px] flex items-center justify-center flex-col gap-5">
        <img src="/src/assets/svg/save.svg" alt="" />
        <h2 className="text-center text-[24px] font-600">Savings</h2>
        <p className="text-center text-[16px] font-400">
          Pretium convallis id diam sed commodo vestibulum lobortis volutpat
        </p>
      </div>
    </div>
  );
}

export default Small;
