import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:p-24 p-6">
      <div>
        <p className="px-6 mx-auto text-3xl text-center dark:text-white">
          Hello and Welcome &nbsp;
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Joseph Opio</span>
          </span>
        </p>
      </div>
      <div className="mt-20">
        <div className="prose prose-xl mx-auto flex justify-between flex-col md:flex-row">
          <div className="">
            <h2 className="font-bold md:-rotate-90 rotate-0 float-left whitespace-nowrap flex-shrink-0 dark:text-slate-400 md:pb-20" >About Me</h2>
          </div>
          <div className="section-content float-right dark:text-slate-100">
            <p>Welcome to my online profile! I am Joseph Opio, a dedicated Computer Science teacher with more than 13 years of experience in the education field. Throughout my career, I have had the privilege of making a significant impact on the lives of numerous students, fostering a dynamic and engaging learning environment to nurture their potential.</p>
            <p>My passion for technology led me to delve into the world of freelance web and app development. With a strong command of programming languages and cutting-edge technologies, I take pride in crafting creative and innovative solutions for clients seeking to enhance their online presence. From responsive and user-friendly websites to intuitive mobile applications, I am committed to delivering high-quality work that aligns with the latest industry trends.</p>
            <p>My expertise spans various fields, including front-end and back-end web development, mobile app development, database design, and user experience (UX) optimization. To stay ahead in this ever-evolving tech landscape, I am continuously learning and seeking out new opportunities for personal and professional growth.</p>
            <p>I thrive in collaborative environments, valuing teamwork and effective communication. Whether I am guiding students on their educational journey or collaborating with clients on their projects, I approach each endeavor with enthusiasm and dedication.</p>
            <p>Join me on this exciting journey as I continue to inspire and innovate in the realms of education and technology. If you are looking for a passionate and knowledgeable educator or a skilled web and app developer, I am here to help you achieve your goals.</p>
            <p>Feel free to reach out to me for any inquiries or collaboration opportunities. Let's explore the limitless possibilities that technology offers together!</p>
          </div>
        </div>
      </div>
      <Contact />
      
    </main>
  )
}
