import React from 'react'
import java from '../assets/java.jpg'
import springboot from '../assets/spring-boot.jpg'
import c from '../assets/c.jpeg'

function BackEndSkills() {

return (
    <>
    <h1 className="skill-name">Backend Tech</h1>
   <div className="inner-con">
       <div className="skill">
         <h2 className="skill-name">Java</h2>
         <img className="skill-img" src={java} />
       </div>
       <div className="skill">
         <h2 className="skill-name">SpringBoot</h2>
         <img className="skill-img" src={springboot} />
       </div>
       <div className="skill">
         <h2 className="skill-name">C#</h2>
         <img className="skill-img" src={c} />
       </div>
   </div>
   </>
)

}

export default BackEndSkills;