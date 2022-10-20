interface InputProps {
    type: string
    placeholder: string
    value: any
    onChange: any
    id: string
    name: string
    isError?: boolean
}

export const Input = ({ type, placeholder, value, onChange, id, name, isError }: InputProps) => {
    return (
        <input id={id} type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} className={`bg-[#F2F2F2] w-[30rem] px-2 py-1 rounded-lg text-xl border-red-500 focus:outline-none ${isError ? ('border-2') : ('focus:rounded-l-none focus:border-l-4')}`} />
    )
}