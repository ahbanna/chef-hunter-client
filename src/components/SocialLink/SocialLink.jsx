import React from "react";
import "./SocialLink.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="social-area">
      <ul>
        <li>
          <a href="https://www.facebook.com/">
            <FaFacebookF className="facebook"></FaFacebookF>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/login">
            <FaTwitter className="twitter"></FaTwitter>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/accounts/login/">
            <FaInstagram className="instagram"></FaInstagram>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <FaYoutube className="youtube"></FaYoutube>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn className="linkedin"></FaLinkedinIn>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
