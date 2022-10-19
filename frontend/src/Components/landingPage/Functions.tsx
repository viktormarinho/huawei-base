import checkIcon from "../../assets/checkIcon.png";

interface FunctionProps {
    name: string
}

export const Function = ({ name }: FunctionProps) => {
    return (
        <div className="flex gap-1 items-center">
            <img src={checkIcon} className=" h-4" />
            <p>{name}</p>
        </div>
    )
}