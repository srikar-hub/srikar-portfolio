import { useRef, useState } from 'react'
import "../css/Navbar.css"
import menubar from "../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../assets/menu_open.svg"
import menu_close from "../assets/menu_close.svg"
const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuref = useRef();
  const openmenu = ()=>{
    menuref.current.style.right = "0";
  }
  const closenmenu = ()=>{
    menuref.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      
      <img src={menu_open} alt="" onClick={openmenu} className='nav-mob-open'/>
      <ul ref={menuref} className="nav-menu">
        <img src={menu_close} alt="" onClick={closenmenu} className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={menubar} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"? <img src={menubar} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={menubar} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"? <img src={menubar} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={menubar} alt="" />:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
