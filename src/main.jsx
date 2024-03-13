import React from "react";
import ReactDOM from "react-dom/client";
import Explan from "./pages/Explan.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Celeb from "./pages/Celeb.jsx";
import Tite from "./pages/Tite.jsx";
import Important from "./pages/Important.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explanation",
    element: <Explan />,
  },
  {
    path: "/celebration",
    element: <Celeb />,
  },
  {
    path: "/tite",
    element: <Tite />,
  },
  {
    path: "/important",
    element: <Important />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
