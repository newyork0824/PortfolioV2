import React from 'react'
import Cal from '../assets/cal.png'
import '../css/project.css';
import { HashLink as Link} from 'react-router-hash-link'



function Project (props){


    return (
    <div className="project-con">
        <img className="project-img"src={props.img} />
        <h1 className="projectName">{props.title}</h1>
        <h2 className="description">{props.content}</h2>
        <button className="demo-btn project-btn"> <a href={props.demolink} target="_blank"> Live Demo </a> </button>
        <button className="github-btn project-btn"> <a href={props.githublink} target="_blank"> Github Repo  </a></button>
    </div>

    )
}

export default Project;