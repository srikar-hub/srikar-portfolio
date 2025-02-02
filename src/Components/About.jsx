import "../css/About.css"
import image from "../assets/image.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <dic className="about-left">
            <img src={image} alt="" width={500} />
        </dic>
        <div className="about-right">
            <div className="about-para">
                <p>Always learning, always evolving.</p>
            </div>
            <div className="about-skills">
            <div className="about-skill">
                    <p>JavaScript</p><hr style = {{width:"50%"}} />
                </div>
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
                <div className="about-skill">
                    <p>Java</p><hr style = {{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>Spring-Boot</p><hr style = {{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>Mysql</p><hr style = {{width:"50%"}} />
                </div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Red Hat</h1>
            <p>Certified</p> 
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Programming in Java</h1>
            <p>Certified by Govt.of.India</p>        
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects</p>        
        </div>
      </div>
    </div>
  )
}

export default About
