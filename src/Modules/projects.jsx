import React from "react";
import Projectdata from "../Data/projectdata.js"
import '../css/projects.css';
import Project from "./project"


function Projects(props){

  const allprojects = Projectdata.map(project => {
    return (
      <Project
      key={project.id}
      {...project}
      />
    )
  })




return (
  <div id="projects">
    <h1 className="projects-title">Projects</h1>
    <div className="allprojects-con">
    
        {allprojects}
        
    
    </div>
    </div>
)

}

export default Projects;