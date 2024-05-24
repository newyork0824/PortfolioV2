import React, {useEffect} from "react";
import '../css/homepage.css';
import Automation from '../assets/automationphoto.jpeg';
import  SoftwarePhoto from '../assets/softwarephoto.webp'
import { HashLink as Link} from 'react-router-hash-link'



function HomePage() {
   


return (
<div  className="home-page-con" id="homePage">
    <h1 className="i-am">Hi, My name is Anthony Tolve</h1>
    <h2 className="subtitle">I am an <span className="software-eng">Software Engineer</span> and an </h2>
    <h2 className="subtitle"><span className=" automation-eng">Automation Testing Engineer</span></h2>
    <button className="homepage-btn" ><Link to="#projects">Projects </Link></button>
</div>


)

}

export default HomePage;