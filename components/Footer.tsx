import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaFacebook } from "react-icons/fa"

const Footer = () => {
    return (
<nav className="bg-slate-900 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className=" mx-auto flex justify-between flex-col sm:flex-row">
                <h3 className="text-small text-white grid place-content-center mb2 md:mb-0">
                    <Link href="/" className="text-white/80 no-underline hover:text-white">
                        &copy;Joseph Opio. All rights reserved. Created by Joseph Opio
                    </Link>
                </h3>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-2xl">
                    <Link className="text-white/90 hover:text-white" href={"https://www.youtube.com/@josephopio"} target="_youtube"><FaYoutube /></Link>
                    <Link className="text-white/90 hover:text-white" href={"https://www.twitter.com/@josepopio"} target="_twitter"><FaTwitter /></Link>
                    <Link className="text-white/90 hover:text-white" href={"https://github.com/josephopio11"} target="_github"><FaGithub /></Link>
                    <Link className="text-white/90 hover:text-white" href={"https://www.facebook.com/@josephopio"} target="_laptop"><FaFacebook /></Link>

                </div>
            </div>
        </nav>    )
}

export default Footer