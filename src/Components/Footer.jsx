import user from "../assets/user_icon.svg"
import "../css/Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-left">
            <p>Full Stack Developer</p>
        </div>
        <div className="footer-right">
          <div className="footer-email-input">
            <img src={user} alt="" />
            <input type="email" name="email" id="" />
          </div>
        </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Srikar Koppunoori. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
