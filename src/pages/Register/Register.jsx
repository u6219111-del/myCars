import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Register.css";

export default function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await register(email, password, username);
      setMessage("Регистрация успешна!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Создать аккаунт</h2>

        <form onSubmit={handleSubmit}
        className="input-group"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <button type="submit">Зарегистрироваться</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
