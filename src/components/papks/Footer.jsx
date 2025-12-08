import React from "react";
import "./Footer.css";

 function Footer() {
  return (
    <footer className="footer">
 
      <div className="footer-top">
        <div className="footer-top-item">
          <img src="/src/assets/svg/car.svg" alt="logo" className="w-[48px] h-[48px]" />
          <div>
            <h4 className="hh4">Car Rental</h4>
          </div>
        </div>

        <div className="footer-top-item">
          <img src="/src/assets/svg/search.svg" alt="address" className="icon" />
          <div>
            <p>Address</p>
            <a href="https://www.zillow.com/homedetails/1212-Oxford-Pl-Cary-NC-27511/6393991_zpid/">
               <h4>Oxford Ave. Cary, NC 27511</h4>
            </a>
         
          </div>
        </div>

        <div className="footer-top-item">
          <img src="/src/assets/svg/post.svg" alt="email" className="icon" />
          <div>
            <p>Email</p>
            <h4>nwigier@yahoo.com</h4>
          </div>
        </div>

        <div className="footer-top-item">
          <img src="/src/assets/svg/phone.svg" alt="phone" className="icon" />
          <div>
            <p>Phone</p>
            <h4>+537 547-6401</h4>
          </div>
        </div>
      </div>

  
      <div className="footer-middle">
        <div className="footer-col about">
          <p>
          Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem tur
          </p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/svg/facebook.svg" alt="facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/svg/instagram.svg" alt="instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/svg/twitter.svg" alt="twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/svg/youtobe.svg" alt="youtube" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Useful links</h4>
          <p>About us</p>
          <p>Contact us</p>
          <p>Gallery</p>
          <p>Blog</p>
          <p>F.A.Q</p>
        </div>

        <div className="footer-col">
          <h4>Vehicles</h4>
          <p>Sedan</p>
          <p>Cabriolet</p>
          <p>Pickup</p>
          <p>Minivan</p>
          <p>SUV</p>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-2xl">Download App</h4>
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


      <div className="footer-bottom">
        <p>© Copyright Car Rental 2024. Design by Figma.guru</p>
      </div>
    </footer>
  );
}


export default Footer;