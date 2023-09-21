import Image from "next/image"

const ProfilePic = () => {
    return (
        <section className="w-full mx-auto">
            <Image
                src={"/images/me.png"}
                width={300}
                height={300}
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black mx-auto rounded-full"
                alt="Joseph Opio"
            />
        </section>
    )
}

export default ProfilePic