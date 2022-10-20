import checkIcon from "../../assets/checkIcon.png";

interface FeatureListProps {
    name: string
}

export const FeatureList = ({ name }: FeatureListProps) => {
    return (
        <div className="flex gap-1 items-center">
            <img src={checkIcon} className=" h-4" />
            <p>{name}</p>
        </div>
    )
}