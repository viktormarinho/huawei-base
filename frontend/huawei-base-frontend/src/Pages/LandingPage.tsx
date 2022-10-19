import huaweilogobase from "../assets/LOGO 1.png";
import checkIcon from "../assets/checkIcon.png";
import tableImage from "../assets/tablet_image.png";
import { RoundedCard } from "../Components/RoundedCard";
import { Navbar } from "../Components/TablesNavBar";
export const LandingPage = () => {
  return (
    <div>
      <Navbar isAdmin={false} />
      <div className="h-[98vh] items-center flex flex-col justify-center gap-20 border-b-2 ">
        <h1 className="text-6xl text-center  select-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-bold  ">
            Huawei Base
          </span>
          , the new way <br></br>to do backend.
        </h1>
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
            <img src={checkIcon} className="h-4"></img>
            <p>Functions</p>
          </div>
        </div>
        <button className="text-2xl font-bold text-white bg-gradient-to-l  select-none from-red-600 to-red-400 uppercase py-4 px-10 rounded-2xl hover:bg-gradient-to-r transition-all duration-150">
          Start Now
        </button>
      </div>

      <div className="flex flex-row justify-around px-40 gap-20 border-b-2">
        <div className="flex flex-col gap-8 justify-center w-[30rem] ">
          <h1 className="text-4xl flex font-semibold gap-[10px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-semibold  select-none">
              ABOUT
            </span>
            Huawei Base
          </h1>
          <p className="text-3xl">
            Huwaei Base is a provisioned backend service that makes it easy to
            build applications through one interface.{" "}
          </p>
          <button
            className="text-xl font-bold text-white bg-gradient-to-l from-red-600 to-red-400 uppercase py-4 px-10 rounded-2xl
                     hover:bg-gradient-to-r transition-all duration-150 w-[60%]  select-none"
          >
            Start Project
          </button>
        </div>
        <div>
          <img src={tableImage}></img>
        </div>
      </div>

      
        <div className="flex flex-col text-center gap-10 py-64 border-b-2">
          <h1 className="uppercase text-4xl bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-bold  select-none">
            developers
          </h1>
          <span className="text-3xl">
            We are students of systems development technician at <br></br>SENAI
            Roberto Mange school and technology college.
          </span>
          <div className="flex flex-row items-center justify-center gap-12">
            <RoundedCard
              name="Tayssa Antoniasse"
              link_to="https://github.com/tayantony"
              person_img="https://avatars.githubusercontent.com/u/98670493?v=4"
            />
            <RoundedCard
              name="Elizeu Magalhães"
              link_to="https://github.com/elizeumagalhaes"
              person_img="https://avatars.githubusercontent.com/u/98928629?v=4"
            />
            <RoundedCard
              name="Igor Oliveira"
              link_to="https://github.com/iguoliveira"
              person_img="https://avatars.githubusercontent.com/u/57506257?v=4"
            />
            <RoundedCard
              name="Vinicius Prates"
              link_to="https://github.com/vinicius-prates"
              person_img="https://avatars.githubusercontent.com/u/89698942?v=4"
            />
            <RoundedCard
              name="Viktor Marinho"
              link_to="https://github.com/viktormarinho"
              person_img="https://avatars.githubusercontent.com/u/56888067?v=4"
            />
          </div>
        </div>
      
      <div className="flex flex-col items-center justify-center text-center gap-10 my-32">

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold"><span className="bg-clip-text text-transparent bg-gradient-to-t
           from-red-600 to-red-300 font-semibold  select-none">CONTACT</span> US</h1>
          <p  className="text-3xl">Something wrong? Contact us in the forum.</p>
        </div>

        <form className="flex flex-col gap-6 ">
            <input type="email" placeholder="Email" className="bg-[#F2F2F2] w-[30rem] p-1 rounded-lg text-xl focus:outline-none"/>
            <input type="text" placeholder="Subject" className="bg-[#F2F2F2] p-1 rounded-lg text-xl focus:outline-none"/>
            <textarea  placeholder="Message here" className="bg-[#F2F2F2] h-[16rem] resize-none p-2 rounded-lg text-xl focus:outline-none"/>
            <button
            className="text-xl font-bold text-white bg-gradient-to-l from-red-600 to-red-400 uppercase py-4 px-10 rounded-2xl
                     hover:bg-gradient-to-r transition-all duration-150   select-none ">
            SEND
          </button>
        </form>

      </div>

      <div>
        <div>
          <h1>© 2022 Huawei Base</h1>
        </div>
        <div>
          <a href=""><img></img></a>
          <a href=""><img></img></a>
          <a href=""><img></img></a>
        </div>
      </div>

    </div>
  );
};
