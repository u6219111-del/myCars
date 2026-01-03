import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { register } = useAuth();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, username);
      setMessage(t('register_success_msg') || t('registration_success') || "Регистрация успешна!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>{t('create_account')}</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              placeholder="Пароль"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              placeholder="Имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}
