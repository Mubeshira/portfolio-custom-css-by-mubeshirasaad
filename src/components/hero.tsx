import "../style/hero.css";
import Image from "next/image";


export default function Hero() {
  return (
    <div className="header-container" >
      <div className="header-boxes-con">
        {/* left */}
        <div>
            <Image src="/images/avatar.avif" className="header-image" alt="mubeshira" width={200} height={200} />

        </div>
        {/* right */}
        <div className="hero-right-div">
            <h1 className="title-hero">I am <span className="name">Mubeshira Saad   </span>
                Front-end-Developer</h1>
                <p className="des-hero">I am a frontend developer on a journey to master the art of creating user-friendly and visually engaging websites and web applications.</p>
             <a href="./contact"> <button className="hero-btn">Hire Me</button></a>
        </div>
      </div>
    </div>
  )
}
