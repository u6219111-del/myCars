function Facts () {
  const stats = [
    {
      img: "/src/assets/svg/miniCar.svg",
      value: "540+",
      label: "Cars",
    },
    {
      img: "/src/assets/svg/love.svg",
      value: "20k+",
      label: "Customers",
    },
    {
      img: "/src/assets/svg/kalendar.svg",
      value: "25+",
      label: "Years",
    },
    {
      img: "/src/assets/svg/timer.svg",
      value: "20m+",
      label: "Miles",
    },
  ];

  return (
    <section className="bg-[#5E36F1] max-w-[1200px] h-[340px] rounded-3xl mt-[100px]">
      <div className=" mx-auto text-center w-[1200px] h-[340px] flex items-center justify-center flex-col gap-10">
        <h2 className="text-5xl font-bold text-[white] mb-4">Facts In Numbers</h2>
        <p className="text-1xl mb-12 text-gray-200 w-[712px]">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. 
          Diam tincidunt tincidunt erat at semper fermentum.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" w-60 h-[100px] ml-5 bg-white text-gray-900 rounded-2xl flex items-center justify-center gap-4 p-5 shadow-lg"
            >
              <div className="bg-[#FFA726] p-3 rounded-xl flex items-center justify-center w-14 h-14">
                <img
                  src={stat.img}
                  alt={stat.label}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <p className="text-[24px] font-bold">{stat.value}</p>
                <p className="text-[16px] text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default Facts;
