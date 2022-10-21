import { Button } from "../components/Button"
import { DocButton } from "../components/DocButton"
import { Navbar } from "../components/Navbar"

interface ProductProps {
    productImage: any
    service: string
    serviceTitle: string
    serviceText: string
}

export const Product = ({ productImage, service, serviceTitle, serviceText }: ProductProps) => {
    return (
        <section className="h-screen flex justify-center items-center">
            <Navbar isProduct={true} />
            <div className="flex justify-center items-center w-full space-x-20">

                <div className="w-[800px] space-y-10">
                    <div className="flex flex-col space-y-5">
                        <span className="text-6xl red-gradient-text">
                            {service}
                        </span>
                        <span className="text-6xl">{serviceTitle}</span>
                    </div>
                    <div>
                        <span className="text-3xl leading-relaxed">{serviceText}</span>
                    </div>
                    <DocButton />
                </div>

                <div>
                    <img src={productImage} />
                </div>
            </div>
        </section>
    )
}