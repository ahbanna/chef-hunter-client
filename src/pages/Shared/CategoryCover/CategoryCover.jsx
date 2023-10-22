import React from "react";
import "./CategoryCover.css";

const CategoryCover = ({ image, title }) => {
  return (
    <div className="category-cover">
      <div className="cat-cover-img">
        <img src={image} alt="" srcset="" />
        <h3 className="category-name">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCover;
