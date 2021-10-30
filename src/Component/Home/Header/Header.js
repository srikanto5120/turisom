import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" className="menu">
        <Container>
          <Navbar.Brand href="#home"> TOUR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={HashLink} className="link" to="/home#home">
                {" "}
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} className="link" to="/home#services">
                {" "}
                Service
              </Nav.Link>
              <Nav.Link as={HashLink} className="link" to="/home#tour">
                Tour
              </Nav.Link>
              <Nav.Link as={HashLink} className="link" to="/home#hotel">
                Hotel
              </Nav.Link>
              <Nav.Link as={HashLink} className="link" to="/about">
                {" "}
                About us
              </Nav.Link>
              <Nav.Link as={HashLink} className="link" to="/home#contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={HashLink} to="/login" className="link">
                login
              </Nav.Link>
              <Nav.Link as={HashLink} to="/signup" className="link">
                signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
