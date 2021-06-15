import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import { UserContext } from "../../routing";
import LoginUserName from "./loginUserName";

const NavbarMenu = () => {
  const { state } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <LoginUserName />
          <Nav.Link href="/logout">Logout</Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">SignUp</Nav.Link>
        </>
      );
    }
  };
  return (
    <>
      <div className="navSection">
        <Navbar collapseOnSelect expand="lg" className="Navigation">
          <Navbar.Brand href="/">
            <h1 className="logo">
              <img
                src="https://i.gifer.com/origin/7d/7df34881e1e46868228057e16bd3572e_w200.gif"
                className="logopic"
                alt="logo"
              />
              Yatra
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navbar link">
              <RenderMenu />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarMenu;
