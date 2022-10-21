import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button"
import { Input } from "../components/form/Input"
import Logo from "../assets/LOGO 1.png"
import { Footer } from "../components/Footer";

export const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "admin@admin.com",
        password: "admin"
    })

    const handleChange = (evt: any) => {
        setInput({
            ...input,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt: any) => {
        event?.preventDefault()
        if (input.email != "" && input.password != "") navigate("/panel/table")
    }

    return (
        <section className="h-screen flex flex-col justify-center items-center gap-14">
            <a href="/"><img src={Logo} /></a>
            <form className="w-[40em] flex flex-col gap-10 items-center justify-center">
                <div className="flex flex-col gap-5">
                    <Input id={"email"} name={"email"} type={"email"} isError={false} placeholder={"Email"} value={input.email} onChange={(evt: any) => handleChange(evt)} />
                    <Input id={"password"} name={"password"} type={"password"} isError={false} placeholder={"Password"} value={input.password} onChange={(evt: any) => handleChange(evt)} />
                </div>
                <Button text={"Login"} isAdmin={false} onClick={(evt: any) => handleSubmit(evt)} />
            </form>
            <Footer isLogin={true} />
        </section>
    )
}