import {
  createBrowserRouter,
} from "react-router-dom";
import './main.css'
import { LandingPage } from "./Pages/LandingPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/panel/table",
    element: <LandingPage />
  }
])