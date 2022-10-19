import { Route, Routes } from "react-router-dom"
import App from "./App"
import { DataBaseTables } from "./Pages/DataBaseTables"
export const MyRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/panel/tables" element={<DataBaseTables/>}/>  
        </Routes>
        

    )
}