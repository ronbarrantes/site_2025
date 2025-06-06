import { createBrowserRouter } from "react-router";

import Root from "@/pages/Root";
import Home from "@/pages/Home";
import About from "@/pages/About";

export const router = createBrowserRouter([
  { path: "/", Component: Root },

  { index: true, Component: Home },
  { path: "about", Component: About },
]);
