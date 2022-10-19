import checkIcon from "../assets/checkIcon.png";
import tableImage from "../assets/tablet_image.png";
import { RoundedCard } from "../Components/RoundedCard";
import { Navbar } from "../Components/TablesNavBar";
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import huawei from "../assets/huaweiBlackIcon.png"
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

      <div className="flex flex-row justify-between items-center py-6 px-10 border-t-2">
        <div>
          <h1>© 2022 Huawei Base</h1>
        </div>
        <div className="flex flex-row gap-8">
          <a href="" ><svg className="hover:fill-red-600 transition-all duration-100" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="48px" height="48px"><path d="M 13 4 C 10.97 4 9.4052969 5.7677656 9.4042969 9.0097656 C 9.4042969 11.126766 12.608219 16.5575 15.449219 21.3125 C 15.449219 9.0005 15.146 7.667 13 4 z M 19 4 C 16.812 7.604 16.550781 8.9995 16.550781 21.3125 C 19.391781 16.5575 22.595703 11.126766 22.595703 9.0097656 C 22.594703 5.7667656 21.03 4 19 4 z M 6 8 C 3.021 10.079 4.0009062 15.000422 5.5039062 16.607422 C 6.4969063 17.647422 10.35 19.52 14 22 L 6 8 z M 26 8 L 18 22 C 21.65 19.52 25.503094 17.647422 26.496094 16.607422 C 27.999094 15.000422 28.979 10.079 26 8 z M 2 16 C 2.048 21.542 5.4307969 23 7.7167969 23 L 13.431641 23 L 2 16 z M 30 16 L 18.568359 23 L 24.283203 23 C 26.569203 23 29.952 21.542 30 16 z M 5.1171875 24 C 5.4361875 25.654 6.1573281 27 8.2363281 27 C 10.315328 27 12.325641 25.8 13.431641 24 L 5.1171875 24 z M 18.568359 24 C 19.674359 25.8 21.684672 27 23.763672 27 C 25.842672 27 26.563813 25.654 26.882812 24 L 18.568359 24 z"/></svg></a>
          <a href=""><svg className="hover:fill-red-600 transition-all duration-100" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="48px" height="48px"><path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg></a>
          <a href=""><svg className="hover:fill-red-600 transition-all duration-100" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg></a>

        </div>
      </div>

    </div>
  );
};
