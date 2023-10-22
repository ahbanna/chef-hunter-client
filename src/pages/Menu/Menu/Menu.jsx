import React from "react";

import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import useTitle from "../../../hooks/useTitle";
import MenuCover from "../../Shared/CategoryCover/CategoryCover";
import breakfastImg from "../../../assets/menu/breakfast-menu.jpg";
import lunchImg from "../../../assets/menu/lunch-menu.jpg";
import dinnerImg from "../../../assets/menu/dinner-menu.jpg";
import { Container } from "react-bootstrap";
import "./Menu.css";
import useMenu from "../../../hooks/useMenu";
import CategoryMenuItem from "../../Shared/CategoryMenuItem/CategoryMenuItem";
import { ScrollRestoration } from "react-router-dom";

const Menu = () => {
  useTitle("Menu");
  const [menu] = useMenu();
  const breakfast = menu.filter((item) => item.category === "breakfast");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <div className="menu-area">
        <Breadcrumb title="All Menu"></Breadcrumb>
        <Container>
          <div className="single-category">
            <MenuCover image={breakfastImg} title="Breakfast"></MenuCover>
            <div className="cat-menu-items">
              {breakfast.map((item) => (
                <CategoryMenuItem item={item}></CategoryMenuItem>
              ))}
            </div>
          </div>
          <div className="single-category">
            <MenuCover image={lunchImg} title="Lunch"></MenuCover>
            <div className="cat-menu-items">
              {breakfast.map((item) => (
                <CategoryMenuItem item={item}></CategoryMenuItem>
              ))}
            </div>
          </div>
          <div className="single-category">
            <MenuCover image={dinnerImg} title="Dinner"></MenuCover>
            <div className="cat-menu-items">
              {breakfast.map((item) => (
                <CategoryMenuItem item={item}></CategoryMenuItem>
              ))}
            </div>
          </div>
        </Container>
        {/* <PopularMenu></PopularMenu> */}
      </div>
    </div>
  );
};

export default Menu;
