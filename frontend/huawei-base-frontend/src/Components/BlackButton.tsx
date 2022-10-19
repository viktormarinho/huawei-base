interface BlackButtonProps{

    text: string
}

export const BlackButton = (props:BlackButtonProps) => {
    
    return(
        <button className="bg-[#242424] text-white  text-lg  rounded-lg px-2  h-[2.4rem] hover:">
            {props.text}
        </button>
    )
}