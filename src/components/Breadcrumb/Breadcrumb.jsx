import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ title }) => {
  return (
    <div className="breadcrumb-area">
      <h3 className="bre-page-title">{title}</h3>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="active">
            <FaLongArrowAltRight></FaLongArrowAltRight>
            {title}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
