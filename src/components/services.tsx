import "../style/services.css"
import { FaLaptopCode } from "react-icons/fa";
import { IoCameraReverseSharp } from "react-icons/io5";
import { PiComputerTowerDuotone } from "react-icons/pi";
import { FaMicrophoneLines } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";






function services() {
  return (
     <main className="services">
    <div className="ser-container">
        {/* top div */}
        <div className="top-div-ser">
            <h2 className="title-ser">MY SERVICES</h2>
            <p className="des-ser">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa 
                mollitia aut eaque eos odit in iure, omnis laudantium totam.</p>
        </div>


        {/* bottom div */}
        <div className="boxes-con">
            <div className="box"><FaLaptopCode  className="ser-icon"/>
            <h3>Web Development</h3>
            <span>Blog, E-commerce</span></div>
            
            <div className="box"><IoCameraReverseSharp
            className="ser-icon"/>
            <h3>Photography</h3>
            <span>Potraits</span></div>

            <div className="box"><PiComputerTowerDuotone
            className="ser-icon"/>
            <h3>UI/UX Design</h3>
            <span>Mobile App, Website Design</span></div>

            <div className="box"><FaLaptopCode  className="ser-icon"/>
            <h3>Game Design</h3>
            <span>2D, 3D</span></div>

            <div className="box"><RiAdvertisementFill
            className="ser-icon"/>
            <h3>Advertising</h3>
            <span>Made Adds</span></div>

            <div className="box"><FaMicrophoneLines 
            className="ser-icon"/>
            <h3>Sound Design</h3>
            <span>Character Design</span></div>






            
        </div>

    </div>
 </main>
  )
}

export default services
