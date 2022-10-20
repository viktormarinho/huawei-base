import './main.css'
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DataBaseTables } from './pages/DataBaseTables';
import { Login } from "./pages/Login"
import { Database } from './pages/Products/Database';
import { CloudFunction } from './pages/Products/CloudFunction';
import { Storage } from './pages/Products/Storage';

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/panel/",
    children: [
      {
        path: "table",
        element: <DataBaseTables />
      }
    ]
  },

  {
    path: "/products/",
    children: [
      {
        path: "database",
        element: <Database />
      },
      {
        path: "cloud-function",
        element: <CloudFunction />
      },
      {
        path: "storage",
        element: <Storage />
      }
    ]
  },

])