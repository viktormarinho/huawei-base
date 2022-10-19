import './main.css'
import {
  createBrowserRouter,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

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