import React from "react";
import "./CategoryMenuItem.css";

const CategoryMenuItem = ({ item }) => {
  const { category, recipe, name, price, image, _id } = item;
  return (
    <div className="cat-single-menu">
      <img src={image} alt="" />
      <div className="cat-single-menu-content">
        <h4 className="menu-name">{name}</h4>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default CategoryMenuItem;
