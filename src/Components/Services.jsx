import "../css/Services.css"
import theme from "../assets/theme_pattern.svg"
import data from "../assets/services_data"
import icon from "../assets/arrow_icon.svg"
const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme} alt="" />
        </div>
        <div className="services-container">
            {data.map(function(service,index){
             return <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={icon} alt="" />
              </div>
             </div>
            })}
        </div>
    </div>
  )
}

export default Services
