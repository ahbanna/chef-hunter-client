import React from "react";
import "./About.css";
import aboutimg from "../../assets/about.png";

const About = () => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={aboutimg} alt="" />
          </div>
          <div className="col-lg-6 about-us-content">
            <h3>Experience The Sublime!</h3>
            <p>
              We prepares and serves exquisite dinners to parties from two to
              200 at your home, business or private catering event. His blend of
              French-Mediterranean cuisine draws on a lifetime of skills and the
              knowledge that all meals, no matter how large or how small, are
              special events among family and friends
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
