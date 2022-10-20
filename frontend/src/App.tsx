import './main.css'
import {
  createBrowserRouter,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AdminPanel } from './pages/AdminPanel';
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
    path: "/panel/admin",
    element: <AdminPanel />
  },

])