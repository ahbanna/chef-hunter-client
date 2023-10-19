import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";
import dish1 from "../../../assets/banner/slider-dish-1.png";
import fireImg from "../../../assets/banner/shape-fire3.png";
import cerfifiedImg from "../../../assets/banner/certified.png";
import CustomButton from "../../../components/CustomButton/CustomButton";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <div className="banner-container">
          <div className="banner-img">
            <img src={dish1} alt="" srcset="" />
          </div>
          <div className="banner-content">
            <div className="popular-text">
              <img src={fireImg} alt="" srcset="" />
              <span>Most Popular Dish</span>
            </div>
            <h3>Crispy Brussels</h3>
            <h2>Sprouts</h2>
            <p>
              Crispy fried brussel sprouts topped with crispy bacon lardons,
              feta cheese, balsamic reduction & green onions.
            </p>
            <CustomButton buttonText="See More" to="/"></CustomButton>
          </div>
        </div>
        {/* <div className="certified">
          <img src={cerfifiedImg} alt="" srcset="" />
        </div> */}
      </Container>
    </div>
  );
};

export default Banner;
