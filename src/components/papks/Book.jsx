import { useState } from "react";
import { Link } from "react-router-dom";
function Book() {
  const [book, setBook] = useState(false);
  const handleBook = () => {
    setBook(true);
  };

  return (
    <div className="w-[1220px] h-[660px] bg-[#5937E0] rounded-[40px] ml-[150px] flex items-center justify-around gap-[100px] px-16 text-white relative">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[40px] z-0"
        src="/src/assets/png/koleso.png"
        alt=""
      />
      <div className="max-w-[450px] flex flex-col gap-10 relative z-10">
        <h1 className="text-[60px] w-[686px] font-bold leading-tight">
          Experience the road like never before
        </h1>
        <p className="text-[16px] text-white font-normal">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper.
        </p>
        <Link to="/vehicles">
          <button className="bg-[#FFA62B] text-white w-[154px] h-10 font-semibold px-6 py-3 rounded-xl hover:bg-[#ff8c00] transition">
            View all cars
          </button>
        </Link>
      </div>

      {!book ? (
        <div className="bg-white rounded-3xl p-8 w-[416px] h-[500px] text-gray-800 shadow-lg flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center gap-5">
            <div className="h-[30px]"></div>
            <h2 className="text-[28px] font-semibold pb-[30px]">
              Book your car
            </h2>

            <select className="w-[336px] h-[38px] rounded-xl bg-[#FAFAFA] border border-gray-100  outline-none px-3">
              <option value="">Car type</option>
              <option>Sports</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Van</option>
            </select>

            <select className="w-[336px] h-[38px] rounded-xl bg-[#FAFAFA] border border-gray-100 focus:border-[#003cff] outline-none px-3">
              <option value="">Place of rental</option>
              <option>Downtown Office</option>
              <option>Airport Terminal</option>
              <option>Central Station</option>
              <option>Harbor Point</option>
            </select>

            <select className="w-[336px] h-[38px] rounded-xl bg-[#FAFAFA] border border-gray-100 focus:border-[#003cff] outline-none px-3">
              <option value="">Place of return</option>
              <option>Downtown Office</option>
              <option>Airport Terminal</option>
              <option>Central Station</option>
              <option>Harbor Point</option>
            </select>

            <input
              type="date"
              className="w-[336px] h-[38px] rounded-xl bg-[#FAFAFA] border border-gray-100 focus:border-[#003cff] outline-none px-3"
            />

            <input
              type="date"
              className="w-[336px] h-[38px] rounded-xl bg-[#FAFAFA] border border-gray-100 focus:border-[#003cff] outline-none px-3"
            />

            <button
              onClick={handleBook}
              className="w-[336px] h-10 bg-[#FF9E0C] text-white font-semibold rounded-xl hover:bg-[#ff8c00] transition"
            >
              Book now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-[#80ff00e3] font-bold text-lg relative z-10">
          Successfully booked
        </div>
      )}
    </div>
  );
}

export default Book;
