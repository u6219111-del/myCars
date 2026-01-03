import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import "./index.css";
function App() {
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