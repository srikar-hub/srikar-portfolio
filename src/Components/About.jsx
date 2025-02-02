import React from 'react'
import "../css/About.css"
import theme from "../assets/theme_pattern.svg"
import profileing from "../assets/about_profile.svg"
import image from "../assets/image.jpg"
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <dic className="about-left">
            <img src={image} alt="" width={500} />
        </dic>
        <div className="about-right">
            <div className="about-para">
                <p>Dedicated student pursuing a Bachelor of Technology degree with a keen interest in soŌware development.
                CommiƩed to conƟnuous learning and staying updated with the latest trends and technologies in the industry</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>Express</p><hr style = {{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>React</p><hr style = {{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>Node</p><hr style = {{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>MongoDB</p><hr style = {{width:"50%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p> 
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>        
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy Clients</p>        
        </div>
      </div>
    </div>
  )
}

export default About
