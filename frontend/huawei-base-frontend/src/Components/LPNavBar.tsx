import huaweilogobase from "../assets/LOGO 1.png"

export const LPNavBar = () => {
    return(
        <div className="bg-[whitesmoke] flex flex-row justify-between px-48 py-2 items-center font-bold text-lg focus:outline-none border-b-2">
            <div>
                <a href="/"><img src={huaweilogobase} /></a>
            </div>
            <div className="flex flex-row gap-24">
                <a>About</a>
                <a>Developers</a>
                <a>Contact</a>
                <a>Login</a>
            </div>

        </div>
    )
}