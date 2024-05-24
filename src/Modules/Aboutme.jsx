import React from "react";
import picofme from '../assets/IMG_1999.jpeg'
import '../css/aboutme.css';



function Aboutme() {

   return(
    <div id="aboutMe" className="about-me-con">
        <div className="bio-con con-new">
        <h1 className="about-me-header aligned-text">I love to Create Websites and Software</h1>
        <h2 className="aligned-text">...And Test Them Too!</h2>
        <p className="my-bio">I started my development journey in 2021 when I took an intro to C++ course in college out of curiosity. Though I 
            went to school for business, that curiosity turned into a desire to change my course in career. I gradated college but began to self
            learn web development. After learning and building projects, I landed my first job with FDM Group in 2022, who continued to train me. They then
            supplied and contracted my services to TD Bank for an automation Engineer posititon. I still build side projects out of the same love
            for development i started with. Come have a look!
        </p>
        </div>
        <div className="about-me-pics-con">
        <img className="about-me-pic" src={picofme} />
        </div>

    </div>
)


}


export default Aboutme;