import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useTranslation } from 'react-i18next';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError(t("passwords_do_not_match"));
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError(t("failed_create_account"));
      console.error(err);
    }

    setLoading(false);
  }

  return (
       <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">{t('create_account')}</h2>

        {error && <div className="register-error">{error}</div>}

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-inputs">
            <input
              type="email"
              placeholder={t('email_address')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
              required
            />
            <input
              type="password"
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
              required
            />
            <input
              type="password"
              placeholder={t('confirm_password')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="register-input"
              required
            />
          </div>

          <button type="submit" disabled={loading} className="register-button">
            {t('sign_up')}
          </button>
        </form>

        <div className="register-login">
          {t('already_have_account')}{" "}
          <Link to="/login" className="register-login-link">
            {t('sign_in_link')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;