import React from "react";
import { ScrollRestoration } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import useTitle from "../../../hooks/useTitle";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  useTitle("Menu");
  return (
    <div>
      <ScrollRestoration />
      <Breadcrumb title="Menu"></Breadcrumb>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
