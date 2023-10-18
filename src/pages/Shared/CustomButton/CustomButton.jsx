import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.css";

const CustomButton = ({ buttonText, to, target }) => {
  return (
    <div className="custom-btn">
      <Link to={to} target={target}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
};

export default CustomButton;
