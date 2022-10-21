import './main.css'
import DatabaseImage from "./assets/database-image.png"
import StorageImage from "./assets/storage-image.png"
import CloudFunctionsImage from "./assets/cloud-functions-image.png"
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
        element: <Product productImage={DatabaseImage} service={"Database"} serviceTitle={"Open source SQL"} serviceText={"Huawei Base Database is a cloud-hosted database. Data is stored in tables that can be visualized in the admin panel or accessed anywhere via our SDK."} />
      },
      {
        path: "cloud-function",
        element: <Product productImage={CloudFunctionsImage} service={"Cloud Functions"} serviceTitle={"in the Huawei Base"} serviceText={"Cloud Functions provides a simple and intuitive developer experience. Just write your code and let Huawei Base take care of the operational infrastructure."} />
      },
      {
        path: "storage",
        element: <Product productImage={StorageImage} service={"Cloud Storage"} serviceTitle={"in the Huawei Base"} serviceText={"Huawei Base Storage is designed for app developers to store and display content such as photos or videos. It is an advanced object storage service."} />
      }
    ]
  },

])