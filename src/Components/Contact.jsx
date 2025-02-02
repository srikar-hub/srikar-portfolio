import React from 'react'
import theme from "../assets/theme_pattern.svg"
import "../css/Contact.css"
import callicon from "../assets/call_icon.svg"
import mailicon from "../assets/mail_icon.svg"
import locationicon from "../assets/location_icon.svg"

const Contact = () => {

  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets talk</h1>
            <p>Im Currently available to take on projects,so feel free to contact me</p>
            <div className="contact-details">
            <div className="contact-detail">
           <img src={mailicon} alt="" />
           <p>2200032252cseh@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={callicon} alt="" />
            <p>+91 9618420523</p>
           </div>
         <div className="contact-detail">
         <img src={locationicon} alt="" />
         <p>Hyderabad ,Telangana</p>
         </div>
        </div> 
        </div>
     
      <form action="" className='contact-right'>
        <label htmlFor="">Your name</label>
        <input type="text" placeholder='Enter your name' name='name' required/>
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='name' required/>
        <label htmlFor="">Write Message</label>
        <textarea placeholder='Enter Message' rows="8" name="message"></textarea>
        <button className='contact-submit' type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
