// import React, { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./Header.css";
// import logo from "../../assets/logo.png";
// import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import "./Header.css";
// import { AuthContext } from "../../../providers/AuthProvider";

// const Header = () => {
//   const { user } = useContext(AuthContext);
//   const menuItems = [
//     { path: "/", label: "Home" },
//     { path: "/blog", label: "Blog" },
//   ];

//   return (
//     <div className="header-area">
//       <div className="header-logo">
//         <Link to="/">
//           <img src={logo} alt="" />
//         </Link>
//       </div>
//       <div className="d-flex align-items-center">
//         <ul className="hidden d-flex align-items-center menu-items ">
//           {menuItems.map((item) => (
//             <li>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) => (isActive ? "active" : "default")}
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="header-apply-btn">
//         <Link to="/login">
//           <Button variant="secondary">Login</Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {} from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";
import Headroom from "react-headroom";

const Header = () => {
  const NavLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/blog",
      title: "Blog",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  const { user } = useContext(AuthContext);

  return (
    <div className="header-area">
      <Headroom>
        <Navbar collapseOnSelect expand="lg">
          <Container className="d-flex justify-content-between align-items-center">
            <NavLink to="/">
              <Image src={logo} alt="Edu Kids" height="55" />
            </NavLink>
            <Nav className="justify-content-center">
              {NavLinks.map(({ path, title }) => (
                <NavLink to={path} key={path}>
                  {title}
                </NavLink>
              ))}
            </Nav>
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          </Container>
        </Navbar>
      </Headroom>
    </div>
  );
};

export default Header;
