interface WhiteButtonProps{

    text: string
}

export const WhiteButton = (props:WhiteButtonProps) => {
    
    return(
        <button className="bg-[whitesmoke] text-[#242424]  text-xl  rounded-lg px-2  h-[2.4rem]">
            {props.text}
        </button>
    )
}