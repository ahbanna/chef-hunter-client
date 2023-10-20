import React from "react";
import "./Introduction.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Container } from "react-bootstrap";
import { BsFillSquareFill } from "react-icons/bs";
import introRightImg1 from "../../../assets/about/about-new-01.jpg";
import introRightImg2 from "../../../assets/about/about-new-02.jpg";

const Introduction = () => {
  return (
    <div className="introduction-area">
      <Container>
        <div className="intro-left">
          <SectionTitle
            title="We Are Experienced Restaurant."
            subtitle="Introduction of Arabian"
          ></SectionTitle>
          <p>
            Established in 1995, Arabian was founded with a simple yet powerful
            vision - to create a haven for food enthusiasts, where innovation
            and tradition coalesce to form an unforgettable dining experience.
            Our journey began with a handful of recipes, a lot of determination,
            and a genuine love for sharing exceptional food with our community.
          </p>
          <div className="intro-features">
            <ul>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Delicious Food.
              </li>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Cost Effective.
              </li>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Clean Environment.
              </li>
            </ul>
            <ul>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Expert Chef.
              </li>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Letraset Sheets.
              </li>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Quality Food.
              </li>
            </ul>
            <ul>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Exquisite Flavors.
              </li>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Premium Ingredients.
              </li>
              <li>
                <BsFillSquareFill></BsFillSquareFill> Affordable Dining.
              </li>
            </ul>
          </div>
        </div>
        <div className="intro-right">
          <img src={introRightImg1} alt="" srcset="" />
          <img src={introRightImg2} className="intro-r-img2" alt="" srcset="" />
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
