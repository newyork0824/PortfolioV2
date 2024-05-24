import React from "react";
import jenkins from '../assets/jenkins.jpg'
import githubactions from '../assets/githubactions.png'


function DevopsSkills() {
    
    return (
        <>
        <h1 className="skill-name">DevOps Tech</h1>
       <div className="inner-con">
           <div className="skill">
             <h2 className="skill-name">Jenkins</h2>
             <img className="skill-img" src={jenkins} />
           </div>
           <div className="skill">
             <h2 className="skill-name">GitHubActions</h2>
             <img className="skill-img" src={githubactions} />
           </div>
       </div>
       </>
    )
}

export default DevopsSkills;
