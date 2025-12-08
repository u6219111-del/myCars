import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Details from "./pages/Details";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",  
        element: <Details />, 
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
      },
      {
        path: "/car/:id",
        element: <Details />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);
