import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import "./index.css";
import { useEffect } from "react";
import i18n from "./i18n";

function App() {
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (!savedLanguage) {
      i18n.changeLanguage('ru');
      localStorage.setItem('language', 'ru');
    }
  }, []);

  return (
    <div className="app-container">
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <RouterProvider router={myRouter} />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;