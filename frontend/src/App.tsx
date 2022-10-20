import './main.css'
import DatabaseImage from "./assets/database-service.png"
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AdminPanel } from './pages/AdminPanel';
import { Login } from "./pages/Login"
import { Product } from './pages/Product';

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
        element: <AdminPanel />
      }
    ]
  },

  {
    path: "/products/",
    children: [
      {
        path: "database",
        element: <Product productImage={DatabaseImage} service={"Database"} serviceTitle={"Open source SQL"} serviceText={"Huawei Base Database is a cloud-hosted database. Data is stored as JSON and synced in real-time for each connected client."} />
      },
      {
        path: "cloud-function",
        element: <Product productImage={DatabaseImage} service={"Cloud Functions"} serviceTitle={"in the Huawei Base"} serviceText={"Cloud Functions provides a simple and intuitive developer experience. Just write your code and let Huawei Base take care of the operational infrastructure."} />
      },
      {
        path: "storage",
        element: <Product productImage={DatabaseImage} service={"Cloud Storage"} serviceTitle={"in the Huawei Base"} serviceText={"Huawei Base Storage is designed for app developers to store and display content such as photos or videos. It is an advanced object storage service."} />
      }
    ]
  },

])