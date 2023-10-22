import React from "react";
import "./AppSection.css";
import googlePlay from "../../../assets/appImg/googleplay.png";
import appStore from "../../../assets/appImg/applestore.png";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import appImg from "../../../assets/appImg/mobileapp.png";
import TitleDividerOne from "../../../components/TitleDividerOne/TitleDividerOne";

const AppSection = () => {
  return (
    <div className="app-area">
      <Container>
        <div className="app-content">
          <SectionTitle
            subtitle="Download Now"
            title="Get Started with our app"
            text="All the dishes you love are just a few clicks away. Order from our full menu, and enjoy the comfort."
          ></SectionTitle>
          <TitleDividerOne></TitleDividerOne>
          <div className="download-btn">
            <a
              className="googlePlay"
              href="https://play.google.com/store/apps?hl=en&gl=US"
              target="_blank"
            >
              <img src={googlePlay} alt="" srcset="" />
            </a>
            <a
              className="appleStore"
              href="https://www.apple.com/app-store/"
              target="_blank"
            >
              <img src={appStore} alt="" srcset="" />
            </a>
          </div>
        </div>
        <div className="app-img">
          <img src={appImg} alt="" srcset="" />
        </div>
      </Container>
    </div>
  );
};

export default AppSection;
