import react from 'react'
import html from '../assets/html.jpg' 
import css from '../assets/css.jpeg'
import javascript from '../assets/javascript.jpg'
import reactimg from '../assets/react.png'


function FrontEndSkills() {

return (
      <>
     <h1 className="skill-name">Frontend Tech </h1>
    <div className="inner-con">
        <div className="skill">
          <h2 className="skill-name">HTML</h2>
          <img className="skill-img" src={html} />
        </div>
        <div className="skill">
          <h2 className="skill-name">CSS</h2>
          <img className="skill-img" src={css} />
        </div>
        <div className="skill">
          <h2 className="skill-name">Javascript</h2>
          <img className="skill-img" src={javascript} />
        </div>
        <div className="skill">
          <h2 className="skill-name">React</h2>
          <img className="skill-img" src={reactimg} />
        </div>
    </div>
    </>
)




}

export default FrontEndSkills;