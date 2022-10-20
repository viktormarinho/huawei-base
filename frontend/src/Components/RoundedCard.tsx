interface CardProps {
    linkTo: string
    personImg: string
    fname: string
    lname: string
    role: string
}
export const RoundedCard = ({ linkTo, personImg, fname, lname, role }: CardProps) => {
    return (
        <div className="w-52 p-4 rounded-xl">
            <a href={linkTo} target="_blank" className="flex flex-col gap-8 focus:outline-none select-none">
                <img src={personImg} className="rounded-full hover:scale-110 hover:opacity-80 hover:shadow-xl transition-all" />
                <div className="text-lg font-bold">
                    <div className="uppercase flex flex-col">
                        <span>{fname}</span>
                        <span>{lname}</span>
                    </div>
                    <span className="text-md text-red-600">{role}</span>
                </div>
            </a>
        </div>
    )
}