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
            <Navbar isProduct={true} isFixed={false} />
            <div className="flex flex-col md:flex-row  justify-center items-center w-full md:space-x-20">

                <div className="w-[20rem]  md:w-[800px] space-y-10 mb-10 mt-40 md:mt-0">
                    <div className="flex flex-col md:space-y-5">
                        <span className="text-3xl md:text-6xl red-gradient-text">
                            {service}
                        </span>
                        <span className="text-3xl md:text-6xl">{serviceTitle}</span>
                    </div>
                    <div>
                        <span className="text-xl md:text-3xl leading-relaxed">{serviceText}</span>
                    </div>
                    <DocButton />
                </div>

                <div>
                    <img className="md:flex hidden " src={productImage} />
                </div>
            </div>
        </section>
    )
}