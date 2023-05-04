import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-area">
      <footer className="bg-dark text-light">
        <div className="container footer-content">
          <div className="row">
            <div className="col-md-3 footer-about">
              <h5>About Us</h5>
              <p>
                At Chef Cooking, we're passionate about bringing delicious and
                healthy food to your table. Our chefs use only the freshest
                ingredients to create meals that are both nutritious and
                flavorful.
              </p>
            </div>
            <div className="col-md-3 quick-links">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Recipes</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-social">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <FaFacebook></FaFacebook> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter></FaTwitter> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram></FaInstagram> Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 contact-us">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Saya Bithi, H#10, R#12</li>
                <li>Phone: +88 01911 000 000</li>
                <li>Email: alhasanulbanna@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-secondary text-center copyright-content">
          <p>&copy; 2023 Chef Cooking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
