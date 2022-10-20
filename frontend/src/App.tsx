import './main.css'
import {
  createBrowserRouter,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DataBaseTables } from './pages/DataBaseTables';
import { Login } from "./pages/Login"

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/panel/table",
    element: <DataBaseTables />
  },

])