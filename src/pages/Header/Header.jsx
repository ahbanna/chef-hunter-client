import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="header-area">
      <div className="container">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/">Home</Link>
                <Nav.Link href="">
                  <Link to="/blog">Blog</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  // <Nav.Link href="#deets">
                  //   <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                  // </Nav.Link>
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}
                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
