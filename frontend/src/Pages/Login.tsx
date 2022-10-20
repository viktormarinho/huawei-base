import { Input } from "../components/form/Input"
import { Navbar } from "../components/Navbar"

export const Login = () => {
    return (
        <section>
            <Navbar isAdmin={false} isFixed={false} />
            <div className="h-screen flex justify-center items-start">
                <div className="bg-[#212121]">
                    <form>
                    </form>
                </div>
            </div>
        </section>
    )
}