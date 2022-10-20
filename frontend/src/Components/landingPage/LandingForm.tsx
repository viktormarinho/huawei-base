import { useState } from "react"
import { Button } from "../Button"
import { Input } from "../form/Input"

export const LandingForm = () => {
    const [input, setInput] = useState({
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (evt: any) => {
        setInput({
            ...input,
            [evt.target.name]: evt.target.value
        })
    }

    const handleForm = (evt: any) => {
        event?.preventDefault()
        console.log(input)
    }

    return (
        <form className="flex flex-col gap-6">
            <Input id={"email"} type={"email"} name={"email"} placeholder={"Email"} value={input.email} onChange={(evt: any) => handleChange(evt)} />
            <Input id={"subject"} type={"text"} name={"subject"} placeholder={"Subject"} value={input.subject} onChange={(evt: any) => handleChange(evt)} />
            <textarea id="message" name="message" placeholder="Message here" value={input.message} onChange={(evt: any) => handleChange(evt)} className="bg-[#F2F2F2] h-[16rem] resize-none px-2 py-1 rounded-lg text-xl border-red-500 focus:outline-none focus:rounded-l-none focus:border-l-4" />
            <Button onClick={(evt: any) => handleForm(evt)} text={"SEND"} isAdmin={false} />
        </form>
    )
}