import "../css/Work.css";
import mywork from "../assets/mywork_data";
import arror from "../assets/arrow_icon.svg";
const Work = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork.map(function (work, index) {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      {/* Project Details Container */}
      <div className="project-details">
        <h4>Project Details</h4>
        <div className="project-section">
          <h3>Technologies Used</h3>
          <p>React, Node.js, MongoDB, Express, EJS, JWT, CSS</p>
        </div>
        <div className="project-section">
          <h3>Description</h3>
          <p>
            Bagify is an e-commerce platform exclusively for selling bags. It
            provides a secure and seamless shopping experience with user
            authentication powered by JSON Web Tokens (JWT). The back-end is
            built with Node.js and Express, while MongoDB handles data
            management. The front-end uses EJS for dynamic content rendering and
            CSS for styling, ensuring an interactive and visually appealing user
            interface.
          </p>
        </div>
        <div className="project-section">
          <h3>Goals</h3>
          <p>
            The goal of this project is to create a user-friendly platform where
            customers can securely browse and purchase high-quality bags. By
            implementing JWT for authentication and using robust technologies,
            Bagify aims to provide a smooth and secure e-commerce experience for
            all users.
          </p>
        </div>
        {/* You can add more sections as needed */}
      </div>

      <div className="mywork-showmore">
        <p>show More</p>
        <img src={arror} alt="" />
      </div>
    </div>
  );
};

export default Work;
