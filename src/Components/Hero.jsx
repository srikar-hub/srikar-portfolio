import "../css/Hero.css"
import img from "../assets/srikar-modified.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={img} alt="" />
      <h1><span>Im Srikar Koppunoori</span>,Full stack Web Developer</h1>
      <p>Dedicated student pursuing a Bachelor of Technology degree with a keen interest in software development.
      Commited to continuous learning and staying updated with the latest trends and technologies in the industry.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1kMdhpcJ09aWSzIBXzatxY5qLbV1LepO2/view" target="_blank">My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
