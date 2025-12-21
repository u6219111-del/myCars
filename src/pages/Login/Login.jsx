import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useTranslation } from 'react-i18next';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(t("failed_sign_in"));
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">{t('sign_in')}</h2>

        {error && <div className="login-error">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />

          <div className="login-inputs">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email_address')}
              className="login-input"
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('password')}
              className="login-input"
            />
          </div>

          <button type="submit" disabled={loading} className="login-button">
            {t('sign_in_button')}
          </button>
        </form>

        <div className="login-register">
          {t('dont_have_account')}{" "}
          <Link to="/register" className="login-register-link">
            {t('sign_up')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;