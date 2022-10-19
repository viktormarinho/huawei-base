import huaweilogobase from "../assets/LOGO 1.png"
import checkIcon from "../assets/checkIcon.png"
import tableImage from "../assets/tablet_image.png"
export const LPNavBar = () => {
    return(
        <div>

        <div className="bg-[whitesmoke] flex flex-row justify-between px-48 py-2 items-center font-bold text-lg 
        focus:outline-none border-b-2 fixed w-full bg-opacity-70 backdrop-blur-lg bg-white/30">
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
            <div className="h-[98vh] items-center flex flex-col justify-center gap-20 border-b-2 ">
                <h1 className="text-6xl text-center "><span className="bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-bold">Huawei Base</span>, the new way <br></br>to do backend.</h1>
                <div className="flex flex-row gap-24 text-xl bg-[#EBEBEB] p-2 rounded-xl px-12">
                    <div className="flex gap-1 items-center">
                        <img src={checkIcon} className=" h-4"></img>
                        <p>Database</p>
                        </div> 
                    <div className="flex gap-1 items-center">
                        <img src={checkIcon} className="h-4"></img>
                        <p>Storage</p>
                        </div>
                    <div className="flex gap-1 items-center">
                        <img src={checkIcon}  className="h-4"></img>
                        <p>Functions</p>
                        </div>
                    
                </div>
                <button className="text-2xl font-bold text-white bg-gradient-to-l from-red-600 to-red-400 uppercase py-4 px-10 rounded-2xl hover:bg-gradient-to-r transition-all duration-150">Start Now</button>
            </div>

            <div className="flex flex-row justify-around mx-40 gap-20 ">
                <div className="flex flex-col gap-8 justify-center w-[30rem] font-semibold">
                    <h1 className="text-4xl flex"><p className="bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300">ABOUT</p>, Huawei Base</h1>
                    <p className="text-lg">Huwaei Base is a provisioned backend service that makes it easy to build applications through one interface. </p>
                    <button className="text-xl font-bold text-white bg-gradient-to-l from-red-600 to-red-400 uppercase py-4 px-10 rounded-2xl
                     hover:bg-gradient-to-r transition-all duration-150 w-[60%]">Start Project</button>
                </div>
                <div>
                    <img src={tableImage}></img>
                </div>
            </div>
        </div>
    )
}