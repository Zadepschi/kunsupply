import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/global.css";

import { router } from "./app/router/router";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <RouterProvider router={router} />
);