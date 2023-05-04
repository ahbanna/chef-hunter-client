import React from "react";
import "./Service.css";
import serviceimg from "../../assets/service.jpg";

const Service = () => {
  const serviceStyle = {
    backgroundImage: `url(${serviceimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="service-area" style={serviceStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-text">
              <h3>Consulting Services</h3>
              <div className="service-para">
                <p>
                  We have the experience to provide concept development
                  strategies
                </p>
                <p>
                  and best practice principles in order to achieve maximum sales
                  performance.
                </p>
              </div>
              <div className="process">
                <h5>The Process</h5>
                <ul>
                  <li>Discover</li>
                  <li>Plan</li>
                  <li>Design</li>
                  <li>Grow</li>
                </ul>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
