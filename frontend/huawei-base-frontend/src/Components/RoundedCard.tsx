import gitHubImage from "../assets/githubRedIcon.png"

interface CardProps {

    link_to: string
    person_img: string
    name: string
}
export const RoundedCard = (props:CardProps) => {
    return(
        <div className="w-52 h-96 p-4 rounded-xl ">
            <a href={props.link_to} target="_blank" className="flex flex-col gap-8">
                    <img src={props.person_img} className="rounded-full border-[5px] border-red-500 hover:scale-110 hover:opacity-80 hover:border-0 transition-all" />
                <p className="text-lg font-bold">{props.name}</p>
            </a>
        </div>
    )
}