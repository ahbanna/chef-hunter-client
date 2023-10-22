import React from "react";
import "./Footer.css";
import { Container, Image } from "react-bootstrap";
import Newsletter from "../../../components/Newsletter/Newsletter";
import ContactInfo from "../../../components/ContactInfo/ContactInfo";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import SocialLink from "../../../components/SocialLink/SocialLink";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-logo text-center">
          <NavLink to="/">
            <Image className="footer-logo" src={logo} alt="Abarian" />
          </NavLink>
        </div>
        <div className="footer-top">
          <div className="footer-inner">
            <div className="footer-about">
              <h4 className="footer-title">about restaurant</h4>
              <p className="footer-text">
                With a passion for quality ingredients and a love for blending
                flavors, our chefs craft dishes that tantalize taste buds and
                leave a lasting impression.
              </p>
              <SocialLink></SocialLink>
            </div>
            <div className="footer-subscribe">
              <h4 className="footer-title">get news and offer</h4>
              <p className="footer-text">
                Subscrible & get <span>10%</span> discount. Get E-mail updates
                about our latest shop and <span>special offers</span>.
              </p>
              <Newsletter></Newsletter>
            </div>
            <div className="footer-contact">
              <h4 className="footer-title">contact us</h4>
              <ContactInfo></ContactInfo>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright footer-text">
            Copyright © 2023 <span>Example</span>. All rights reserved.
          </p>
          <ul className="policy-terms footer-text">
            <li>Privacy & Cookie Policy </li>
            <li>Terms of Service </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
