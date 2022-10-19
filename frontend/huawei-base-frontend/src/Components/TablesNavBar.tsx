import huaweilogobase from "../assets/LOGO 1.png";
interface NavBarProps {
  children?: JSX.Element;
  isAdmin: boolean;
}

export const Navbar = ({ children, isAdmin }: NavBarProps) => {
  return (
    <div
      className={`bg-[whitesmoke] flex flex-row justify-between px-48 py-2 items-center font-bold text-lg 
        focus:outline-none ${isAdmin ? '' : 'fixed'} border-b-2 w-full bg-opacity-70 backdrop-blur-lg bg-white/30`}
    >
      <div>
        <a href="/">
          <img src={huaweilogobase} />
        </a>
      </div>

      {isAdmin ? (
        <div className="flex align-end justify-center items-center ">
          {children}
        </div>
      ) : (
        <div className="flex flex-row gap-24">
          <a>About</a>
          <a>Developers</a>
          <a>Contact</a>
          <a>Login</a>
        </div>
      )}
    </div>
  );
};
