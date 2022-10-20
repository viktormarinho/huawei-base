interface ButtonProps {
    text: string
    isDefault?: boolean
    isAdmin: boolean
    onClick?: any
}

export const Button = ({ text, isDefault, isAdmin, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`{${isAdmin ? (`bg-[{${isDefault ? '#242424' : 'whitesmoke'}}] text-[#242424] text-xl rounded-lg px-2 h-[2.4rem]`) : ("text-2xl font-bold text-white bg-gradient-to-l  select-none from-red-600 to-red-400 uppercase py-4 px-10 rounded-2xl hover:bg-gradient-to-r")}`}>
            {text}
        </button>
    )
}