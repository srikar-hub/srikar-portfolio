import React from 'react'
import "../css/Hero.css"
import profileImg from '../assets/profile_img.svg'
import img from "../assets/srikar-modified.png"
const Hero = () => {
  return (
    <div className='hero'>
      <img src={img} alt="" />
      <h1><span>Im Srikar Koppunoori</span>,Full stack Web Developer</h1>
      <p>Dedicated student pursuing a Bachelor of Technology degree with a keen interest in software development.
      Commited to conƟnuous learning and staying updated with the latest trends and technologies in the industry.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
