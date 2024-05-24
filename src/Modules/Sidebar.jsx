import React from "react";
import '../css/sidebar.css';
import { useState , useEffect} from "react";
import { HashLink as Link} from 'react-router-hash-link'



function Sidebar () {

    const [hamBurgerIsClicked, sethamBurgerIsClicked] = useState(false);
     
 
return (
    <nav className="sidebar-con nav-sticky">
        <div className="Site-title-con">
            <h1 className="Site-title"> Portfolio</h1>
        </div>
        <button className="nav-btn" onClick={ () => sethamBurgerIsClicked(prevState => !prevState)}> 
            <svg classname="hamburger" viewBox="0 0 100 100" width={50}>
                <rect className="top-bar line" 
                width="80" height="10"
                 x="10" y="25" rx="5"                      >   
                </rect>
                <rect className="middle-bar line" 
                width="80" height="10"
                 x="10" y="45" rx="5"                      >   
                </rect>
                <rect className="bottom-bar line" 
                width="80" height="10"
                 x="10" y="65" rx="5"                      >   
                </rect>
            </svg>
            </button>
    <ul className={`${hamBurgerIsClicked ?'active' : 'hidden'} middle-nav-list`}>
        <li> <Link to= '#homePage' >Home</Link></li>
        <li><Link to= '#aboutMe' >About Me</Link></li>
        <li> <Link to='#skills'>Skills </Link></li>
        <li className="project-nav-btn-mob project-nav-btn"><Link to= "#projects">Projects </Link></li>
    </ul>
    <div className="project-nav-btn-con">
        <button className="project-nav-btn project-nav-btn-desktop"> <Link to= "#projects">Projects </Link></button>
        </div>
    </nav>
    
)
    
    
}






export default Sidebar;