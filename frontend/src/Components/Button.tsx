interface ButtonProps {
  text: string;
  isDefault?: boolean;
  isAdmin: boolean;
  onClick?: any;
  isMobile?: boolean;
}

export const Button = ({
  text,
  isDefault,
  isAdmin,
  onClick,
  isMobile = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isAdmin
          ? `bg-[${
              isDefault ? "#242424" : "whitesmoke"
            }] text-[#242424] text-xl rounded-lg px-2 h-[2.4rem] border-2 border-gray-900 w-40 hover:bg-[#242424] hover:text-white transition-all `
          : `text-2xl font-bold text-white select-none rounded-2xl p-4 ${
              isMobile
                ? "bg-gradient-to-r from-gray-400 to-gray-800"
                : "button-gradient-animation"
            }`
      }`}
      disabled={isMobile && true}
    >
      {text}
    </button>
  );
};
