import "../style/hero.css";
import Image from "next/image";
import "../style/about.css"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link"





export default function About() {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        {/* left */}
        <div>
            <Image src="/images/avatar.avif" className="header-image" alt="mubeshira" width={200} height={200}  />
           <div className="social-icon"> 
            <Link href={"https://www.facebook.com/mubeshira.malik"}><FaFacebook className="sicon1" /></Link>
            <Link href={"https://www.instagram.com/"}><RiInstagramFill  className="sicon2" /></Link>
            <Link href={"https://www.linkedin.com/in/mubeshira-saad-6461622b8/"}><FaLinkedin   className="sicon3"/></Link></div>




        </div>
        {/* right */}
        <div className="hero-right-div">
            <h1 className="title-hero">About Us</h1>
                <p className="des-hero"> Hi, I'm <b>Mubeshira Saad</b>, a passionate web developer with expertise in building 
          modern, responsive websites and web applications. I love turning ideas 
          into reality using the power of JavaScript, Next.js, and Tailwind CSS.
          With a background in computer science, I have developed a wide range of 
          skills including HTML, CSS, TypeScript, JavaScript, React, Next.js, and more. I believe in 
          writing clean, scalable code and creating engaging user experiences.
          When I'm not coding, you can find me reading, writing, and traveling.
          I am constantly learning new technologies and improving my skills to stay up-to-date
          with industry trends. Feel free to check out my portfolio and reach out if you'd like 
          to collaborate on a project or just chat!
</p>
            
        </div>
      </div>
    </div>
  )
}