import React from 'react';
import { useState } from "react";
import mockito from '../assets/mockito.png'
import tosca from '../assets/tosca.png'
import jenkins from '../assets/jenkins.jpg'
import junit from '../assets/junit.png'
import githubactions from '../assets/githubactions.png'
import FrontEndSkills from './FrontEndSkills';
import '../css/teachskills.css'
import BackEndSkills from './BackEndSkills';
import TestingSkills from './TestingSkills';
import DevopsSkills from './DevopsSkills';

function Skills() {

  const [SelectedSkill, setSelectedSkill] = useState("none");

  function setSkill(skill) {
    setSelectedSkill(skill);
  }

    return (

     <>
      <h1 id="skills" className="title">Skills</h1>
     <div className="skills-con">
    
      
    
      <div className="tech-skills-div">
         <button className="skill-btn top-btn" onClick={() => setSkill(1)}>FrontEnd</button>
         <button className="skill-btn top-btn" onClick={() => setSkill(2)}>BackEnd</button>
         <button className="skill-btn bottom-btn" onClick={() => setSkill(3)}>Testing</button>
         <button className="skill-btn bottom-btn" onClick={() => setSkill(4)}>Devops</button>
        </div>
        <div className="currentSelected">
        {SelectedSkill === 1 ? <FrontEndSkills /> : <h1></h1>}
        {SelectedSkill === 2 ? <BackEndSkills /> : <h1></h1>}
        {SelectedSkill === 3 ? <TestingSkills /> : <h1></h1>}
        {SelectedSkill === 4 ? <DevopsSkills /> : <h1></h1>}
   
    </div>
    </div>
    </>
  
 
   

    )



}
export default Skills;