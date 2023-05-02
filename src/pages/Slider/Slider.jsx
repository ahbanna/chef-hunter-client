import React from "react";
import "./Slider.css";
import bannerImage from "../../assets/chicken-grill.png";

const Slider = () => {
  return (
    <div className="slider-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 slider-content">
            <h4>Welcome to</h4>
            <h3>
              <span>Bringing Health and Flavor</span> <br /> To Your Table
            </h3>
            <p>
              Where every flavor tells a story. We are adding an enjoyable food
              experience to your taste.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={bannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
