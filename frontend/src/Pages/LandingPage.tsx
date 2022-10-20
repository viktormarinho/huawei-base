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

      <div className="h-[98vh] items-center flex flex-col justify-center gap-20 border-b-2">
        <h1 className="text-6xl text-center  select-none">
          <div>
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-red-300 font-bold">
              Huawei Base
            </span>
            <span>, the new way</span>
          </div>
          <span>to do backend.</span>
        </h1>
        <div className="flex space-x-10">
          <Function name="Database" link={"/products/database"}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" rx="30" fill="#FF0000" />
              <path d="M45 22.2156V24.2254C45 25.9965 38.2813 27.441 30 27.441C21.7187 27.441 15 25.9965 15 24.2254V22.2156C15 20.4445 21.7187 19 30 19C38.2813 19 45 20.4445 45 22.2156ZM45 26.7376V31.2595C45 33.0306 38.2813 34.4751 30 34.4751C21.7187 34.4751 15 33.0306 15 31.2595V26.7376C18.2227 28.1946 24.1211 28.8729 30 28.8729C35.8789 28.8729 41.7773 28.1946 45 26.7376V26.7376ZM45 33.7717V38.2936C45 40.0648 38.2813 41.5093 30 41.5093C21.7187 41.5093 15 40.0648 15 38.2936V33.7717C18.2227 35.2288 24.1211 35.9071 30 35.9071C35.8789 35.9071 41.7773 35.2288 45 33.7717Z" fill="white" />
            </svg>
          </Function>

          <Function name="Cloud Functions" link={"/products/cloud-function"}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" rx="30" fill="#FF0000" />
              <path d="M28.0736 40.4147L25.2144 39.6989C24.9145 39.6261 24.7457 39.3551 24.8301 39.0963L31.228 20.0804C31.3124 19.8216 31.6264 19.676 31.9264 19.7488L34.7856 20.4646C35.0855 20.5374 35.2543 20.8084 35.1699 21.0672L28.772 40.0831C28.6829 40.3419 28.3736 40.4916 28.0736 40.4147ZM22.7303 35.8771L24.7692 34.0006C24.9848 33.8024 24.9707 33.487 24.7317 33.305L20.4851 30.0818L24.7317 26.8585C24.9707 26.6765 24.9895 26.3611 24.7692 26.1629L22.7303 24.2864C22.5193 24.0923 22.1631 24.0802 21.9334 24.2662L15.1793 29.7259C14.9402 29.916 14.9402 30.2435 15.1793 30.4336L21.9334 35.8973C22.1631 36.0834 22.5193 36.0753 22.7303 35.8771V35.8771ZM38.0666 35.9014L44.8207 30.4377C45.0598 30.2476 45.0598 29.92 44.8207 29.7299L38.0666 24.2622C37.8416 24.0802 37.4854 24.0883 37.2697 24.2824L35.2308 26.1589C35.0152 26.3571 35.0293 26.6725 35.2683 26.8545L39.5149 30.0818L35.2683 33.305C35.0293 33.487 35.0105 33.8024 35.2308 34.0006L37.2697 35.8771C37.4807 36.0753 37.8369 36.0834 38.0666 35.9014V35.9014Z" fill="white" />
            </svg>
          </Function>

          <Function name="Storage" link={"/products/storage"}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" rx="30" fill="#FF0000" />
              <path d="M16.875 40.7616C16.875 41.6565 17.7129 42.3794 18.75 42.3794H41.25C42.2871 42.3794 43.125 41.6565 43.125 40.7616V26.2013H16.875V40.7616ZM26.25 30.0436C26.25 29.71 26.5664 29.437 26.9531 29.437H33.0469C33.4336 29.437 33.75 29.71 33.75 30.0436V30.4481C33.75 30.7818 33.4336 31.0548 33.0469 31.0548H26.9531C26.5664 31.0548 26.25 30.7818 26.25 30.4481V30.0436ZM43.125 19.7301H16.875C15.8379 19.7301 15 20.4531 15 21.3479V23.7746C15 24.2195 15.4219 24.5835 15.9375 24.5835H44.0625C44.5781 24.5835 45 24.2195 45 23.7746V21.3479C45 20.4531 44.1621 19.7301 43.125 19.7301Z" fill="white" />
            </svg>
          </Function>
        </div>
        <Button text={'LIVE DEMO'} isAdmin={false} />
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
          <a href="google.com" target={"blank"} className="flex items-center space-x-3 text-xl font-bold text-white bg-gradient-to-l select-none from-red-600 to-red-400 py-3 px-10 rounded-2xl hover:bg-gradient-to-r w-[400px]">
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.1367 0.0031185C27.9898 0.181708 21.7351 0.831753 17.8739 3.19534C17.6075 3.35843 17.4565 3.64842 17.4565 3.95162V24.8467C17.4565 25.5099 18.1817 25.9291 18.7933 25.6213C22.7659 23.6218 28.5112 23.0763 31.352 22.927C32.3219 22.8758 33.0759 22.0983 33.0759 21.1663V1.76605C33.0765 0.749062 32.1944 -0.0566029 31.1367 0.0031185ZM15.202 3.19534C11.3413 0.831753 5.08666 0.182283 1.9398 0.0031185C0.882039 -0.0566029 0 0.749062 0 1.76605V21.1669C0 22.0995 0.753983 22.877 1.72388 22.9275C4.56582 23.0768 10.314 23.6229 14.2866 25.6236C14.8965 25.9308 15.6194 25.5122 15.6194 24.8507V3.94129C15.6194 3.63751 15.469 3.359 15.202 3.19534Z" fill="white" />
            </svg>
            <span>Read the documentation</span>
          </a>
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
          <p className="text-3xl">Something wrong? Contact us.</p>
        </div>
        <div className="flex space-x-40">
          <div className="flex flex-col flex-wrap justify-center space-y-10">

            <div className="flex space-x-8 items-center justify-start">
              <svg width="52" height="39" viewBox="0 0 52 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.0148 12.8781C51.4109 12.5633 52 12.8578 52 13.3555V34.125C52 36.8164 49.8164 39 47.125 39H4.875C2.18359 39 0 36.8164 0 34.125V13.3656C0 12.8578 0.578906 12.5734 0.985156 12.8883C3.26016 14.6555 6.27656 16.9 16.6359 24.4258C18.7789 25.9898 22.3945 29.2805 26 29.2602C29.6258 29.2906 33.3125 25.9289 35.3742 24.4258C45.7336 16.9 48.7398 14.6453 51.0148 12.8781ZM26 26C28.3562 26.0406 31.7484 23.0344 33.4547 21.7953C46.932 12.0148 47.9578 11.1617 51.0656 8.72422C51.6547 8.26719 52 7.55625 52 6.80469V4.875C52 2.18359 49.8164 0 47.125 0H4.875C2.18359 0 0 2.18359 0 4.875V6.80469C0 7.55625 0.345312 8.25703 0.934375 8.72422C4.04219 11.1516 5.06797 12.0148 18.5453 21.7953C20.2516 23.0344 23.6437 26.0406 26 26Z" fill="#FF0000" />
              </svg>
              <span className="flex items-start">huaweibase@email.com</span>
            </div>

            <div className="flex space-x-8 items-center justify-start">
              <svg width="37" height="50" viewBox="0 0 37 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5987 48.338C2.59867 28.0421 0 25.9591 0 18.5C0 8.2827 8.2827 0 18.5 0C28.7173 0 37 8.2827 37 18.5C37 25.9591 34.4013 28.0421 20.4013 48.338C19.4825 49.6652 17.5174 49.6651 16.5987 48.338ZM18.5 26.2083C22.7572 26.2083 26.2083 22.7572 26.2083 18.5C26.2083 14.2428 22.7572 10.7917 18.5 10.7917C14.2428 10.7917 10.7917 14.2428 10.7917 18.5C10.7917 22.7572 14.2428 26.2083 18.5 26.2083Z" fill="#FF0000" />
              </svg>
              <div className="flex flex-col justify-center items-start text-start"><span>Rua Pastor Cicero Canuto de Lima, 71,</span><span>São Bernardo - Vila Rialto, Campinas</span><span>- SP, 13036-210</span></div>
            </div>

            <div className="flex space-x-8 items-center justify-start">
              <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.5456 36.0384L38.3891 31.2571C37.9125 31.054 37.3829 31.0112 36.8798 31.1351C36.3768 31.2591 35.9277 31.5431 35.6 31.9444L30.6593 37.9808C22.9053 34.3249 16.6651 28.0847 13.0092 20.3307L19.0457 15.39C19.4478 15.063 19.7324 14.6138 19.8564 14.1106C19.9804 13.6073 19.9371 13.0773 19.733 12.6009L14.9516 1.44445C14.7276 0.930868 14.3314 0.511542 13.8314 0.258782C13.3313 0.00602164 12.7587 -0.0643293 12.2123 0.0598596L1.85277 2.45053C1.32599 2.57217 0.856003 2.86877 0.519507 3.29193C0.183011 3.71508 -0.000121347 4.23979 6.03266e-08 4.78043C6.03266e-08 30.3307 20.7092 51 46.2196 51C46.7604 51.0003 47.2853 50.8173 47.7087 50.4808C48.132 50.1443 48.4288 49.6742 48.5505 49.1472L50.9411 38.7877C51.0645 38.2386 50.9927 37.6638 50.738 37.162C50.4833 36.6602 50.0616 36.2629 49.5456 36.0384Z" fill="#FF0000" />
              </svg>
              <span>{"(19)"} 99999-9999</span>
            </div>

          </div>
          <LandingForm />
        </div>
      </div>

      <Footer isLogin={false} />
    </section>
  );
};
