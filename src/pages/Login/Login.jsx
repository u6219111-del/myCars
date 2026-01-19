import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await login(email, password);
      setMessage("Вы вошли в систему!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Войти</h2>

        <form 
         onSubmit={handleSubmit}
         className="input-group">
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

          <button type="submit">Войти</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
