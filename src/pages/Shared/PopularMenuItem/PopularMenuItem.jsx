import React from "react";
import "./PopularMenuItem.css";

const PopularMenuItem = ({ item }) => {
  const { category, recipe, name, price, image, _id } = item;
  return (
    <div className="single-popular-menu">
      <div className="menu-img">
        <img src={image} alt="" />
      </div>
      <div className="menu-content">
        <h4 className="menu-name">{name}</h4>
        <p className="menu-recipe">{recipe}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default PopularMenuItem;
