import { useState } from "react"
import { DataBase } from "../components/panel/DataBase"
import { Functions } from "../components/panel/Functions"
import { Storage } from "../components/panel/Storage"
import { Navbar } from "../components/Navbar"
import DataBaseIcon from "../assets/DataBaseIcon.png"
import StorageIcon from "../assets/StorageIcon.png"
import FunctionsIcon from "../assets/FunctionsIcon.png"
import { Button } from "../components/Button"

export const AdminPanel = () => {
    const icons: Array<{ id: number, image: JSX.Element }> = [
        { id: 0, image: <img src={DataBaseIcon} /> },
        { id: 1, image: <img src={StorageIcon} /> },
        { id: 2, image: <img src={FunctionsIcon} /> }
    ]
    const [currentPanel, setCurrentPanel] = useState<{ id: number, image: JSX.Element }>(icons[0]);

    const panelOptions: Array<JSX.Element> = [<DataBase />, <Storage />, <Functions />];

    return (
        <div className="h-[75vh]">
            <Navbar isAdmin={true} isFixed={false} >
                {<Button text="Your Projects" isAdmin={true} />}
            </Navbar>

            <div className="flex flex-row">
                <div className="bg-[#2d2d2d] flex flex-col gap-10 px-6 py-10 items-center h-[90vh] border-r-2 border-gray-500">
                    {icons.map(icon => {
                        if (icon.id == currentPanel.id) {
                            return (
                                
                                <a
                                    onClick={() => setCurrentPanel(icon)}
                                    className="hover:border-gray-500 flex items-center justify-center p-2 cursor-pointer w-10 h-10 rounded hover:transition-all border-2">
                                    {icon.image}
                                </a>
                            )
                        }
                        return (
                            <a
                                onClick={() => setCurrentPanel(icon)}
                                className="hover:border-gray-500 flex items-center justify-center p-2 cursor-pointer w-10 h-10 rounded hover:transition-all">
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