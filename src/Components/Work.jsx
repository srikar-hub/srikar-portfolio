import "../css/Work.css"
import theme from "../assets/theme_pattern.svg"
import mywork from "../assets/mywork_data"
import arror from "../assets/arrow_icon.svg"
const Work = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme} alt="" />
        </div>
        <div className="mywork-container">
           {mywork.map(function(work,index){
             return <img key={index} src={work.w_img} alt="" />
           })}
        </div>
        <div className="mywork-showmore">
         <p>show More</p>
         <img src={arror} alt="" />
        </div>
    </div>
  )
}

export default Work
