import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // твой контекст
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Vehicles from "./pages/Vehicles/Vehicles";
import Details from "./pages/Details/Details";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Services from "./pages/Services/Services";
import Testimonials from "./pages/Testimonials/Testimonials";
import FAQ from "./pages/Faq/FAQ";
import Blog from "./pages/Blog/Blog";
import Locations from "./pages/Locations/Locations";
import CheckoutSuccess from "./pages/CheckoutSucces/CheckoutSuccess";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import UserAccount from "./pages/UserAccount/UserAccount";
import Employees from "./pages/Employees/Employees";
import PrivateRoute from "./PrivateRouter";
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "details", element: <Details /> },
      { path: "vehicles", element: <Vehicles /> },
      { path: "car/:id", element: <Details /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
      { path: "favorites", element: <Favorites /> },
      { path: "services", element: <Services /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "faq", element: <FAQ /> },
      { path: "blog", element: <Blog /> },
      { path: "locations", element: <Locations /> },
      { path: "employees", element: <Employees /> },
      { path: "checkout-success", element: <CheckoutSuccess /> },
      {
        path: "admin-login",
        element: <AdminLogin />,
      },
      {
        path: "admin",
        element: (
          <PrivateRoute requireAdmin={true}>
            <AdminPanel />
          </PrivateRoute>
        ),
      },
      {
        path: "my-account",
        element: (
          <PrivateRoute>
            <UserAccount />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
