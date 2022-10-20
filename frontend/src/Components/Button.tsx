interface ButtonProps {
    text: string
    isDefault?: boolean
    isAdmin: boolean
    onClick?: any
}

export const Button = ({ text, isDefault, isAdmin, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} 
        className={`{${isAdmin ? (`bg-[{${isDefault ? '#242424' : 'whitesmoke'}}] text-[#242424] text-xl rounded-lg px-2 h-[2.4rem] border-2 border-gray-900 w-40 hover:bg-[#242424] hover:text-white transition-all `) :
         ("text-2xl font-bold text-white   select-none button-gradient-animation")}`}>
            {text}
        </button>
    )
}