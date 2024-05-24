import SideBar from './src/Modules/Sidebar.jsx'
import HomePage from './src/Modules/homepage.jsx'
import Aboutme from './src/Modules/Aboutme.jsx'
import Skills from './src/Modules/Skills.jsx'
import Projects from './src/Modules/projects.jsx'
import { HashLink as Link} from 'react-router-hash-link'
import React from 'react'



function App() {

  return (
    
    <div>
      
     <SideBar />
      <HomePage  />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
   
  )
}

export default App
