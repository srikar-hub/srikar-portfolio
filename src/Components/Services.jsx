import "../css/Services.css"
import data from "../assets/services_data"
import icon from "../assets/arrow_icon.svg"
const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            
        </div>
        <div className="services-container">
            {data.map(function(service,index){
             return <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              
              <div className="services-readmore">
                <p>Read More</p>
                <img src={icon} alt="" width={300} height={300}/>
              </div>
             </div>
            })}
        </div>
    </div>
  )
}

export default Services
