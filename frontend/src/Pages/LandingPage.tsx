import tableImage from "../assets/tablet_image.png";
import { RoundedCard } from "../components/RoundedCard";
import { Navbar } from "../components/Navbar";
import { Function } from "../components/landingPage/Functions";
import { Button } from "../components/Button";
import { LandingForm } from "../components/landingPage/LandingForm";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  return (
    <section>
      <Navbar isAdmin={false} about={"#about"} devs={"#devs"} contact={"#contact"} />

      <div className="h-[98vh] items-center flex flex-col justify-center gap-20 border-b-2 ">
        <h1 className="text-6xl text-center  select-none">
          <div>
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-bold">
              Huawei Base
            </span>
            <span>, the new way</span>
          </div>
          <span>to do backend.</span>
        </h1>
        <div className="flex flex-row gap-24 text-xl bg-[#EBEBEB] p-2 rounded-xl px-12">
          <Function name="Database" />
          <Function name="Cloud Functions" />
          <Function name="Storage" />
        </div>
        <Button text={'START NOW'} isAdmin={false} />
      </div>

      <div className="flex flex-row justify-around px-40 gap-20 border-b-2" id="about">
        <div className="flex flex-col gap-8 justify-center w-[30rem] ">
          <div className="text-3xl flex items-center font-semibold gap-[8px]">
            <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-semibold select-none">
              ABOUT
            </span>Huawei Base</div>
          <p className="text-3xl">
            Huawei Base is a provisioned backend service that makes it easy to
            build applications through one interface.
          </p>
          <Button text={"Start Project"} isAdmin={false} />
        </div>
        <div>
          <img src={tableImage} />
        </div>
      </div>

      <div className="flex flex-col text-center gap-10 py-24 border-b-2" id="devs">
        <h1 className="uppercase text-4xl bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-bold  select-none">
          developers
        </h1>
        <div className="flex flex-col text-4xl">
          <span>We are students of systems development technician at</span>
          <span>SENAI Roberto Mange school and technology college.</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-12">
          <RoundedCard
            fname="Tayssa"
            lname="Antoniasse"
            role="UX/UI Designer"
            linkTo="https://github.com/tayantony"
            personImg="https://avatars.githubusercontent.com/u/98670493?v=4"
          />
          <RoundedCard
            fname="Elizeu"
            lname="Magalhães"
            role="UX/UI Designer"
            linkTo="https://github.com/elizeumagalhaes"
            personImg="https://avatars.githubusercontent.com/u/98928629?v=4"
          />
          <RoundedCard
            fname="Igor"
            lname="Oliveira"
            role="Full-Stack"
            linkTo="https://github.com/iguoliveira"
            personImg="https://avatars.githubusercontent.com/u/57506257?v=4"
          />
          <RoundedCard
            fname="Vinicius"
            lname="Prates"
            role="Frontend"
            linkTo="https://github.com/vinicius-prates"
            personImg="https://avatars.githubusercontent.com/u/89698942?v=4"
          />
          <RoundedCard
            fname="Viktor"
            lname="Marinho"
            role="Full-Stack"
            linkTo="https://github.com/viktormarinho"
            personImg="https://avatars.githubusercontent.com/u/56888067?v=4"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-10 py-24" id="contact">
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-semibold"><span className="bg-clip-text text-transparent bg-gradient-to-t
           from-red-600 to-red-300 font-semibold select-none">CONTACT</span> US</div>
          <p className="text-3xl">Something wrong? Contact us in the forum.</p>
        </div>
        <LandingForm />
      </div>

      <Footer />
    </section>
  );
};
