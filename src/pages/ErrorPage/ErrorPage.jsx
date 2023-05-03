import React from "react";
import errorimg from "../../assets/404.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="container error-area">
        <div className="row">
          <div className="col-lg-6 error-text">
            <h3>Page Not Found</h3>
            <div className="back-to-home-btn">
              <Link to="/">Go To Home Page</Link>
            </div>
          </div>
          <div className="col-lg-6 error-img">
            <img src={errorimg} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
