import React from "react";
import img1 from "../../../assets/about/about-img1.png";
import img2 from "../../../assets/about/about-img2.png";
import img3 from "../../../assets/about/about-img3.png";
import img4 from "../../../assets/about/about-img4.png";
import { Container } from "react-bootstrap";
import "./AboutSection.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TitleDividerTwo from "../../../components/TitleDividerTwo/TitleDividerTwo";

const AboutSection = () => {
  return (
    <div className="about-section-area">
      <Container>
        <div className="about-img">
          <img src={img1} alt="" srcset="" className="about-img1" />
          <img src={img3} alt="" srcset="" className="about-img3" />
          <img src={img2} alt="" srcset="" className="about-img2" />
          <img src={img4} alt="" srcset="" className="about-img4" />
        </div>
        <div className="about-des">
          <SectionTitle
            title="Where Culinary Delights Meet Unforgettable Experiences"
            subtitle="About Arabian"
          ></SectionTitle>
          <TitleDividerTwo></TitleDividerTwo>
          <p>
            Join us at Arabian and indulge in a culinary adventure that
            celebrates flavors, freshness, and the joy of sharing a great meal.
            Whether you’re a local food enthusiast or a visitor looking for a
            memorable dining experience, we look forward to welcoming you and
            creating moments that linger in your memory long after your meal is
            over.
          </p>
          <CustomButton buttonText="Learn More" to="/"></CustomButton>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
