import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
  return (
    <div className="ambal flex items-center justify-between h-[104px] w-[1320px]">
      <div className="flex items-center gap-3">
        <img src="/src/assets/svg/car.svg" alt="" />
        <h3 className="text-[16px] font-bold">Car Rental</h3>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-8 text-[18px] font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUs</Link>
          </li>
          <li>
            <Link to="/contactus">ContactUs</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3">
        <img src="/src/assets/svg/call.svg" alt="" />
        <span>
          <p className="text-[16px] font-normal">Need help?</p>
          <p className="text-[16px] font-semibold">+996 247-1680</p>
        </span>
      </div>
    </div>
  );
}

export default Header;
