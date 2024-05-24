import React from 'react'
import mockito from '../assets/mockito.png'
import tosca from '../assets/tosca.png'
import junit from '../assets/junit.png'


function TestingSkills() {
return (
    <>
    <h1 className="skill-name">Testing Tools</h1>
   <div className="inner-con">
       <div className="skill">
         <h2 className="skill-name">Mockito</h2>
         <img className="skill-img" src={mockito} />
       </div>
       <div className="skill">
         <h2 className="skill-name">Junit</h2>
         <img className="skill-img" src={junit} />
       </div>
       <div className="skill">
         <h2 className="skill-name">Tricentis Tosca</h2>
         <img className="skill-img" src={tosca} />
       </div>
   </div>
   </> 
)

}

export default TestingSkills;