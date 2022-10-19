import huaweilogobase from "../assets/LOGO 1.png"
interface NavBarProps {
    children: JSX.Element
}

export const TablesNavBar = ({children}: NavBarProps) => {

    return(
        <div className="bg-[whitesmoke] text-[#323232] flex flex-row justify-between px-20 py-2">
            <div>
                <a href="/"><img src={huaweilogobase}></img>
                    </a>
                </div>

            <div className="flex align-end justify-center items-center ">
                {children}
            </div>
            
        </div>
    )
}
