// import React, { useContext } from "react";
// import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import {} from "react-router-dom";
// import "./Header.css";
// import logo from "../../../assets/logo.png";
// import { AuthContext } from "../../../providers/AuthProvider";
// import Headroom from "react-headroom";

// const Header = () => {
//   const NavLinks = [
//     {
//       path: "/",
//       title: "Home",
//     },
//     {
//       path: "/menu",
//       title: "Menu",
//     },
//     {
//       path: "/about",
//       title: "About",
//     },
//     {
//       path: "/contact",
//       title: "Contact",
//     },
//   ];

//   const { user } = useContext(AuthContext);

//   return (
//     <div className="header-area">
//       <Headroom>
//         <Navbar collapseOnSelect expand="lg">
//           <Container className="d-flex justify-content-between align-items-center">
//             <NavLink to="/">
//               <Image className="site-logo" src={logo} alt="Abarian" />
//             </NavLink>
//             <Nav className="justify-content-center">
//               {NavLinks.map(({ path, title }) => (
//                 <NavLink to={path} key={path}>
//                   {title}
//                 </NavLink>
//               ))}
//             </Nav>
//             <NavLink to="/login" className="login-btn">
//               Login
//             </NavLink>
//           </Container>
//         </Navbar>
//       </Headroom>
//     </div>
//   );
// };

// export default Header;

// import React, { useContext } from "react";
// import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import {} from "react-router-dom";
// import "./Header.css";
// import logo from "../../../assets/logo.png";
// import { AuthContext } from "../../../providers/AuthProvider";
// import Headroom from "react-headroom";

// const Header = () => {
//   const NavLinks = [
//     {
//       path: "/",
//       title: "Home",
//     },
//     {
//       path: "/menu",
//       title: "Menu",
//     },
//     {
//       path: "/about",
//       title: "About",
//     },
//     {
//       path: "/contact",
//       title: "Contact",
//     },
//   ];

//   const { user } = useContext(AuthContext);

//   return (
//     <div className="header-area">
//       <Headroom>
//         <Navbar collapseOnSelect expand="lg">
//           <Container className="d-flex justify-content-between align-items-center">
//             <NavLink to="/">
//               <Image className="site-logo" src={logo} alt="Abarian" />
//             </NavLink>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse
//               id="responsive-navbar-nav"
//               className="justify-content-center "
//             >
//               <Nav className="justify-content-center">
//                 {NavLinks.map(({ path, title }) => (
//                   <NavLink to={path} key={path}>
//                     {title}
//                   </NavLink>
//                 ))}
//               </Nav>
//             </Navbar.Collapse>
//             <NavLink to="/login" className="login-btn">
//               Login
//             </NavLink>
//           </Container>
//         </Navbar>
//       </Headroom>
//     </div>
//   );
// };

// export default Header;

// 3rd

import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
      path: "/menu",
      title: "Menu",
    },
    {
      path: "/about",
      title: "About",
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
              <Image className="site-logo" src={logo} alt="Abarian" />
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="mx-auto">
                {NavLinks.map(({ path, title }) => (
                  <NavLink to={path} key={path}>
                    {title}
                  </NavLink>
                ))}
              </Nav>
              <div className="d-flex align-items-end">
                <NavLink to="/login" className="login-btn">
                  Login
                </NavLink>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Headroom>
    </div>
  );
};

export default Header;
