interface ButtonProps {
    text: string
    isDefault?: boolean
    isAdmin: boolean
}

export const Button = ({ text, isDefault, isAdmin }: ButtonProps) => {
    return (
        isAdmin
            ?
            (
                <button className={`bg-[{${isDefault ? '#242424' : 'whitesmoke'}}] text-[#242424] text-xl rounded-lg px-2 h-[2.4rem]`}>
                    {text}
                </button>
            )
            :
            (
                <button className="text-2xl font-bold text-white bg-gradient-to-l  select-none from-red-600 to-red-400 uppercase py-4 px-10 rounded-2xl hover:bg-gradient-to-r">
                    {text}
                </button>
            )

    )
}