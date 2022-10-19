import { useState } from "react"
import { BlackButton } from "../Components/BlackButton"
import { DataBase } from "../Components/PanelComponents/DataBase"
import { Functions } from "../Components/PanelComponents/Functions"
import { Storage } from "../Components/PanelComponents/Storage"
import { TablesNavBar } from "../Components/TablesNavBar"
import DataBaseIcon from "../assets/DataBaseIcon.png"
import StorageIcon from "../assets/StorageIcon.png"
import FunctionsIcon from "../assets/FunctionsIcon.png"
export const DataBaseTables = () => {
    const icons: Array<{id: number, image: JSX.Element}> = [
        {id: 0, image: <img src={DataBaseIcon} />},
        {id: 1, image: <img src={StorageIcon} />},
        {id: 2, image: <img src={FunctionsIcon} />}
    ]
    const [currentPanel, setCurrentPanel] = useState<{id: number, image: JSX.Element}>(icons[0]);

    const panelOptions: Array<JSX.Element> = [<DataBase/>, <Storage/>, <Functions/>];
    
    return(
        <div className="max-h-screen">
            <TablesNavBar>
                {<BlackButton text="Your Projects"/>}
            </TablesNavBar>
            <div className="flex flex-row">

                <div className="bg-[#2d2d2d] flex flex-col gap-10 px-6 py-10 items-center h-[91.1vh] border-r-2 border-gray-500">
                    {icons.map(icon => {
                        if (icon.id == currentPanel.id) {
                            return (
                                <a 
                                onClick={() => setCurrentPanel(icon)}
                                className="hover:border-gray-500 p-2 cursor-pointer w-10 h-10 rounded hover:transition-all border-2">
                                    {icon.image}
                                </a>
                            )
                        }
                        return (
                            <a 
                            onClick={() => setCurrentPanel(icon)}
                            className="hover:border-gray-500 p-2 cursor-pointer w-10 h-10 rounded hover:transition-all">
                                {icon.image}
                            </a>
                        )
                    })}
                </div>
                
                <div>
                    {panelOptions[currentPanel.id]}
                </div>
            </div>


        </div>

    )
}