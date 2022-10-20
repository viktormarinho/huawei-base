import HuaweiBaseLogo from "../assets/LOGO 1.png";
import { Link } from 'react-router-dom'

interface NavBarProps {
  children?: JSX.Element;
  isAdmin?: boolean;
  isFixed?: boolean
  home?: string
  about?: string
  devs?: string
  contact?: string
  isProduct?: boolean
  isAbsolute?: boolean
}

export const Navbar = ({ about, devs, contact, home, children, isAdmin = false, isFixed = true, isProduct = false, isAbsolute = true }: NavBarProps) => {
  return (
    <nav
      className={`bg-[whitesmoke] flex flex-row justify-between px-48 py-2 items-center font-bold text-lg 
        focus:outline-none ${isFixed ? 'fixed' : ''} border-b-2 w-full bg-opacity-70 backdrop-blur-lg bg-white/30 ${isAbsolute && ("absolute top-0")}`}
    >
      <div>
        <a href="/">
          <img src={HuaweiBaseLogo} />
        </a>
      </div>

      {isAdmin ? (
        <div className="flex align-end justify-center items-center">
          {children}
        </div>
      ) : (
        <div className="flex flex-row items-center gap-24">
          {
            !isProduct
              ?
              (
                <>
                  <a href={home} className="navbar-links">Home</a>
                  <a href={about} className="navbar-links">About</a>
                  <a href={devs} className="navbar-links">Developers</a>
                  <a href={contact} className="navbar-links">Contact</a>
                </>
              )
              :
              (
                <Link to={"/"} className="navbar-links">Home</Link>
              )
          }
          <Link to={"/login"} className="border-2 border-black rounded-2xl py-1 px-6 hover:bg-black hover:text-white transition-all ease-linear">Live Demo</Link>
        </div>
      )}
    </nav>
  );
};
