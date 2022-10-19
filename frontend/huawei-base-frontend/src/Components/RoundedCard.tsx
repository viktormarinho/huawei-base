interface CardProps {

    link_to: string
    person_img: string
    name: string
}
export const RoundedCard = (props:CardProps) => {
    return(
        <div className="w-52 ">
            <a href={props.link_to} target="_blank" className="flex flex-col gap-8">
                <img src={props.person_img} className=" border-gray-200 border-4 rounded-full"/>
                <p className="text-lg font-bold">{props.name}</p>
            </a>
        </div>
    )
}