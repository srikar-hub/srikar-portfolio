import "../css/Contact.css"
import callicon from "../assets/call_icon.svg"
import mailicon from "../assets/mail_icon.svg"
import locationicon from "../assets/location_icon.svg"

const  Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8b77fcf2-7a2b-4cac-bdbf-8a4a7f6846b7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets talk</h1>
            <p>Im Currently available to take on projects,so feel free to contact me</p>
            <div className="contact-details">
            <div className="contact-detail">
           <img src={mailicon} alt="" />
           <p>
    <a href="mailto:2200032252cseh@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
      2200032252cseh@gmail.com
    </a>
  </p>
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
     
      <form onSubmit={onSubmit} className='contact-right'>
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
