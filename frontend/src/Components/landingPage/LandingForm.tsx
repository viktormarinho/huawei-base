import { Button } from "../Button"

export const LandingForm = () => {
    return (
        <form className="flex flex-col gap-6 ">
            <input type="email" placeholder="Email" className="bg-[#F2F2F2] w-[30rem] px-2 py-1 rounded-lg text-xl border-red-500 focus:outline-none focus:rounded-l-none focus:border-l-4" />
            <input type="text" placeholder="Subject" className="bg-[#F2F2F2] w-[30rem] px-2 py-1 rounded-lg text-xl border-red-500 focus:outline-none focus:rounded-l-none focus:border-l-4" />
            <textarea placeholder="Message here" className="bg-[#F2F2F2] h-[16rem] resize-none px-2 py-1 rounded-lg text-xl border-red-500 focus:outline-none focus:rounded-l-none focus:border-l-4" />
            <Button text={"SEND"} isAdmin={false} />
        </form>
    )
}