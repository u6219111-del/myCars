import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-item">
          <img
            src="/src/assets/svg/car.svg"
            alt="logo"
            className="w-[48px] h-[48px]"
          />
          <div>
            <h4 className="hh4">Car Rental</h4>
          </div>
        </div>

        <div className="footer-top-item">
          <img
            src="/src/assets/svg/search.svg"
            alt="address"
            className="icon"
          />
          <div>
            <p>{t("address")}</p>
            <a href="https://www.zillow.com/homedetails/1212-Oxford-Pl-Cary-NC-27511/6393991_zpid/">
              <h4>Oxford Ave. Cary, NC 27511</h4>
            </a>
          </div>
        </div>

        <div className="footer-top-item">
          <img src="/src/assets/svg/post.svg" alt="email" className="icon" />
          <div>
            <p>{t("email")}</p>
            <a href="https://mail.google.com/mail/u/0/?hl=en#inbox">
              <h4>u263823@gmail.com</h4>
            </a>
          </div>
        </div>

        <div className="footer-top-item">
          <img src="/src/assets/svg/phone.svg" alt="phone" className="icon" />
          <div>
            <p>{t("phone")}</p>
            <h4>+537 547-6401</h4>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-col about">
          <p>
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem tur
          </p>

          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/svg/facebook.svg" alt="facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/svg/instagram.svg" alt="instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/svg/twitter.svg" alt="twitter" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/svg/youtobe.svg" alt="youtube" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t("useful_links")}</h4>
          <p>{t("about_us")}</p>
          <p>{t("contact")}</p>
          <p>{t("gallery")}</p>
          <p>{t("blog")}</p>
          <p>{t("faq")}</p>
        </div>

        <div className="footer-col">
          <h4>{t("vehicles")}</h4>
          <p>{t("sedan")}</p>
          <p>{t("cabriolet")}</p>
          <p>{t("pickup")}</p>
          <p>{t("minivan")}</p>
          <p>{t("suv")}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-2xl">{t("download_app_footer")}</h4>
          <a href="https://www.apple.com/app-store/">
            <button className="w-[170px] h-[50px] bg-[black] text-white border-none outline-none flex items-center justify-center gap-3 rounded-md cursor-pointer">
              <img src="/src/assets/svg/apple.svg" alt="" />
              <span>
                <p className="text-[22px] font-semibold">App Store</p>
              </span>
            </button>
          </a>
          <a href="https://play.google.com/store/games?hl=ru">
            <button className="w-[170px] h-[50px] bg-[black] text-white border-none outline-none flex items-center justify-center gap-3 rounded-md cursor-pointer">
              <img src="/src/assets/svg/googlePlay.svg" alt="" />
              <span className="flex flex-col justify-start">
                <p className="text-[20px] font-semibold">Google Play</p>
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
