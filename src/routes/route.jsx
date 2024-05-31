import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import Tenants from "@/pages/Tenants.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/tenants",
    element: <Tenants />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default route;
