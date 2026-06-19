import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../../pages/HomePage/HomePage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { LogisticsPage } from "../../pages/LogisticsPage/LogisticsPage";
import { ContactPage } from "../../pages/ContactPage/ContactPage";

import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "logistics",
        element: <LogisticsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);