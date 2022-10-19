interface ButtonProps {
    text: string
    isDefault: boolean
}

export const Button = ({ text, isDefault }: ButtonProps) => {
    return (
        <button className={`bg-[{${isDefault ? '#242424' : 'whitesmoke'}}] text-[#242424] text-xl rounded-lg px-2 h-[2.4rem]`}>
            {text}
        </button>
    )
}