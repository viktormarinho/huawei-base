import { Link } from "react-router-dom"

interface FunctionProps {
    name: string
    children: JSX.Element
    link: string
}

export const Function = ({ name, children, link }: FunctionProps) => {
    return (
        <Link to={link}>
            <div className="flex flex-col justify-center items-start gap-1 bg-[#EBEBEB] w-80 py-5 px-8 rounded-3xl space-y-6 hover:scale-110 hover:opacity-80 hover:shadow-xl transition-all">
                <div className="flex items-center space-x-5">
                    {children}
                    <span className="text-[20px]">{name}</span>
                </div>
                <span className="text-[22px]">Learn More {">"}</span>
            </div>
        </Link>
    )
}