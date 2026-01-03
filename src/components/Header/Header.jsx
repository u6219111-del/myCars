import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import LanguageSwitcher from "../languagest/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { user: currentUser, logout } = useAuth();
  const { getCartCount } = useCart();
  const { getFavoritesCount } = useFavorites();
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [userMenuOpen, setUserMenuOpen] = useState(false); // отдельное состояние для меню пользователя

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
      setUserMenuOpen(false);
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
          ❤️{" "}
          {getFavoritesCount() > 0 && (
            <span className="icon-badge">{getFavoritesCount()}</span>
          )}
        </Link>

        <Link to="/cart" className="icon-link">
          🛒{" "}
          {getCartCount() > 0 && (
            <span className="icon-badge">{getCartCount()}</span>
          )}
        </Link>

        {currentUser ? (
          <div className="user-menu">
            <div className="user-info" onClick={() => setMenuOpen(!menuOpen)}>
              {currentUser.avatar_url ? (
                <img
                  src={currentUser.avatar_url}
                  alt="avatar"
                  className="user-avatar"
                />
              ) : (
                <div className="user-avatar-placeholder">👤</div>
              )}
              <span className="user-name">
                {currentUser.username ?? currentUser.email ?? "User"}
              </span>
            </div>

            {menuOpen && (
              <div className="user-dropdown">
                <Link to="/my-account" className="user-dropdown-item">
                  {t("my_account")}
                </Link>
                {currentUser.role === "admin" && (
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
