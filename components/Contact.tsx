import Image from "next/image"
import { FaRegEnvelope, FaPhoneAlt, FaMapPin } from "react-icons/fa"


const Contact = () => {
    return (
        <div>
            <div className="">
                <div className="prose prose-xl mx-auto  justify-between">
                    <div className="border-b-2">
                        <h2 className="font-bold whitespace-nowrap flex-shrink-0 dark:text-white" >Contact Me</h2>
                    </div>
                    <div className="section-content dark:text-slate-100">
                        <p>Please get in touch and we have a chat in case of anything. Please use any of the contacts below.</p>
                        <div>
                            <div className=" text-white text-4xl lg:text-5xl sm:text-2xl flex gap-6 align-middle justify-start">
                                <FaRegEnvelope />
                                <p className="text-sm">
                                    hi@josephopio.com
                                </p>
                            </div>
                            <div className=" text-white text-4xl lg:text-5xl sm:text-2xl flex gap-6 align-middle justify-start">
                                <FaPhoneAlt />
                                <p className="text-sm">
                                    +256 775 36 6973
                                </p>
                            </div>
                            <div className=" text-white text-4xl lg:text-5xl sm:text-2xl flex gap-6 align-middle justify-start">
                                <FaMapPin />
                                <p className="text-sm">
                                    Kampala, Uganda
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact