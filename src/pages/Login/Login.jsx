import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("Attempt login with:", email.trim(), password);
      const user = await login(email.trim(), password); // Supabase login
      console.log("Login successful:", user);
      navigate("/my-account");
    } catch (err) {
      console.error("Login error object:", err);
      let message = t("failed_sign_in");
      if (err?.status === 400) {
        message = t("wrong_email_or_password", "Wrong email or password");
      }
      setError(message);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">{t("sign_in")}</h2>
        {error && <div className="login-error">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-inputs">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("email_address")}
              className="login-input"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("password")}
              className="login-input"
            />
          </div>
          <button type="submit" disabled={loading} className="login-button">
            {loading ? t("loading", "Loading...") : t("sign_in_button")}
          </button>
        </form>
        <div className="login-register">
          {t("dont_have_account")}{" "}
          <Link to="/register" className="login-register-link">
            {t("sign_up")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
