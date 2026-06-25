import { createBrowserRouter } from "react-router-dom";

import App from "../../App";

import { HomePage } from "../../pages/HomePage/HomePage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { LogisticsPage } from "../../pages/LogisticsPage/LogisticsPage";
import { ContactPage } from "../../pages/ContactPage/ContactPage";

import { PrivacyPolicyPage } from "../../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import { TermsPage } from "../../pages/TermsPage/TermsPage";
import { CookiePolicyPage } from "../../pages/CookiePolicyPage/CookiePolicyPage";

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
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicyPage />,
      },
    ],
  },
]);