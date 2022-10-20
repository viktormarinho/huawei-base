import HuaweiBaseLogo from "../assets/LOGO 1.png";
import { Link } from 'react-router-dom'

interface NavBarProps {
  children?: JSX.Element;
  isAdmin: boolean;
  about?: string
  devs?: string
  contact?: string
}

export const Navbar = ({ about, devs, contact, children, isAdmin }: NavBarProps) => {
  return (
    <div
      className={`bg-[whitesmoke] flex flex-row justify-between px-48 py-2 items-center font-bold text-lg 
        focus:outline-none ${isAdmin ? '' : 'fixed'} border-b-2 w-full bg-opacity-70 backdrop-blur-lg bg-white/30`}
    >
      <div>
        <a href="/">
          <img src={HuaweiBaseLogo} />
        </a>
      </div>

      {isAdmin ? (
        <div className="flex align-end justify-center items-center ">
          {children}
        </div>
      ) : (
        <div className="flex flex-row gap-24">
          <a href={about} className="cursor-pointer">About</a>
          <a href={devs} className="cursor-pointer">Developers</a>
          <a href={contact} className="cursor-pointer">Contact</a>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
};
