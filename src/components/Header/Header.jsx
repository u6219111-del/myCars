import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import LanguageSwitcher from "../languagest/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { currentUser, logout } = useAuth();
  const { getCartCount } = useCart();
  const { getFavoritesCount } = useFavorites();
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <img src="/src/assets/svg/car.svg" alt="Logo" className="header-logo" />
        <h3 className="header-title">Car Rental</h3>
      </div>

      <button
        className="burger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`burger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${menuOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/vehicles">{t("vehicles")}</Link>
          </li>
          <li>
            <Link to="/services">{t("services")}</Link>
          </li>
          <li>
            <Link to="/aboutus">{t("about_us")}</Link>
          </li>
          <li>
            <Link to="/contactus">{t("contact")}</Link>
          </li>
          <li>
            <Link to="/blog">{t("blog")}</Link>
          </li>
          <li>
            <Link to="/testimonials">{t("testimonials")}</Link>
          </li>
          <li>
            <Link to="/locations">{t("locations")}</Link>
          </li>
        </ul>
      </nav>

      <LanguageSwitcher />

      <div className="header-right">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <Link to="/favorites" className="icon-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {getFavoritesCount() > 0 && (
            <span className="icon-badge">{getFavoritesCount()}</span>
          )}
        </Link>

        <Link to="/cart" className="icon-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {getCartCount() > 0 && (
            <span className="icon-badge">{getCartCount()}</span>
          )}
        </Link>

        {currentUser ? (
          <div className="user-menu">
            <div className="user-info" onClick={() => setMenuOpen(!menuOpen)}>
              {currentUser.avatar_url && (
                <img
                  src={currentUser.avatar_url}
                  alt="avatar"
                  className="user-avatar"
                />
              )}
              <span className="user-name">
                {currentUser.full_name || currentUser.email}
              </span>
            </div>

            {menuOpen && (
              <div className="user-dropdown">
                <Link to="/my-account" className="user-dropdown-item">
                  {t("my_account")}
                </Link>
                {(currentUser.role === "admin" || currentUser.email === "admin@example.com") && (
                  <Link to="/admin" className="user-dropdown-item">
                    {t("admin_panel")}
                  </Link>
                )}
                <button onClick={handleLogout} className="user-dropdown-item">
                  {t("logout")}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="login-btn">
              {t("login")}
            </Link>
            <Link to="/register" className="register-btn">
              {t("register")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
