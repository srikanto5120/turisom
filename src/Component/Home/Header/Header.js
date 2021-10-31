import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user.photoURL);
  console.log(user);
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" fixed="top" className="menu">
        <Container>
          <Navbar.Brand href="#home"> TOUR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={HashLink} className="link" to="/home#home">
                {" "}
                Home
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
            {user.displayName ? (
              <Link
                to="/home"
                className="d-flex align-items-center name me-4  "
              >
                <p className="ml-2 ">{user.displayName}</p>

                <img className="user-img" src={user.photoURL} alt="" />
              </Link>
            ) : (
              <Link to="/home">
                {" "}
                <img
                  className="user"
                  src={"https://i.ibb.co/QXy94Bm/profile-icon-png-893.png"}
                  alt=""
                />
              </Link>
            )}
            <Nav>
              {user.displayName ? (
                <button onClick={logOut} className="btn btn-secondary">
                  Logout
                </button>
              ) : (
                <Nav.Link as={HashLink} to="/login" className="link">
                  login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
