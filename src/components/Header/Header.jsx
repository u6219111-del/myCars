import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import LanguageSwitcher from "../languagest/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { getProfile } from "../../api/mockUsers";

function Header() {
  const { user: currentUser, logout } = useAuth();
  const { getCartCount } = useCart();
  const { getFavoritesCount } = useFavorites();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
 
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.header-nav') && !event.target.closest('.burger-btn')) {
        setMobileMenuOpen(false);
      }
      if (userDropdownOpen && !event.target.closest('.user-menu')) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen, userDropdownOpen]);

    // Управление классом body.menu-open для overlay
    useEffect(() => {
      if (mobileMenuOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
      return () => {
        document.body.classList.remove('menu-open');
      };
    }, [mobileMenuOpen]);

  // Close menus when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
        setUserDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load user profile when user is authenticated
  useEffect(() => {
    const loadUserProfile = async () => {
      if (currentUser?.id) {
        try {
          const profile = await getProfile(currentUser.id);
          setUserProfile(profile);
        } catch (error) {
          console.warn("Could not load user profile:", error);
          setUserProfile(null);
        }
      } else {
        setUserProfile(null);
      }
    };

    loadUserProfile();
  }, [currentUser]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("Theme switched to:", newTheme);
    console.log("Data-theme attribute:", document.documentElement.getAttribute("data-theme"));
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
      <Link to="/">
        <div className="header-left">
          <img
            src="/src/assets/svg/car.svg"
            alt="Logo"
            className="header-logo"
          />
          <h3 className="header-title">Car Rental</h3>
        </div>
      </Link>

      <button
        className={`burger-btn ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <span className={`burger-line ${mobileMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${mobileMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${mobileMenuOpen ? "open" : ""}`}></span>
      </button>

      <nav 
        className={`header-nav ${mobileMenuOpen ? "open" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="nav-list">
          <li>
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("home")}</Link>
          </li>
          <li>
            <Link 
              to="/vehicles" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("vehicles")}</Link>
          </li>
          <li>
            <Link 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("services")}</Link>
          </li>
          <li>
            <Link 
              to="/aboutus" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("about_us")}</Link>
          </li>
          <li>
            <Link 
              to="/contactus" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("contact")}</Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("blog")}</Link>
          </li>
          <li>
            <Link 
              to="/testimonials" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("testimonials")}</Link>
          </li>
          <li>
            <Link 
              to="/locations" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("locations")}</Link>
          </li>
          <li>
            <Link 
              to="/employees" 
              onClick={() => setMobileMenuOpen(false)}
            >{t("employees", "Сотрудники")}</Link>
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
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-moon-stars"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-brightness-high-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg>
          )}
        </button>

        <Link to="/favorites" className="icon-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>{" "}
          {getFavoritesCount() > 0 && (
            <span className="icon-badge">{getFavoritesCount()}</span>
          )}
        </Link>

        <Link to="/cart" className="icon-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>{" "}
          {getCartCount() > 0 && (
            <span className="icon-badge">{getCartCount()}</span>
          )}
        </Link>

        {currentUser ? (
          <div className="user-menu">
            <div className="user-info" onClick={() => setUserDropdownOpen(!userDropdownOpen)}>
              {userProfile?.avatar_url ? (
                <img
                  src={userProfile.avatar_url}
                  alt="avatar"
                  className="user-avatar"
                />
              ) : (
                <div className="user-avatar-placeholder">
                  {(userProfile?.username || currentUser?.email || "U")
                    .charAt(0)
                    .toUpperCase()}
                </div>
              )}
              <span className="user-name">
                {userProfile?.username ||
                  currentUser?.email?.split("@")[0] ||
                  "User"}
              </span>
            </div>

            {userDropdownOpen && (
              <div className="user-dropdown">
                <Link to="/my-account" className="user-dropdown-item">
                  {t("my_account")}
                </Link>
                {(currentUser.role === "admin" ||
                  currentUser.hasAdminAccess) && (
                  <Link to="/admin" className="user-dropdown-item">
                    {t("admin_panel")}
                  </Link>
                )}
                {!currentUser.hasAdminAccess && (
                  <Link to="/admin-login" className="user-dropdown-item">
                    Admin Login
                  </Link>
                )}
                <button 
                  onClick={() => {
                    handleLogout();
                    setUserDropdownOpen(false);
                  }} 
                  className="user-dropdown-item"
                >
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
