import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Alcove
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/notifications">
              Notifications
            </Nav.Link>
            <NavDropdown
              title="Our Brands"
              id="basic-nav-dropdown"
              className="navbar-dropdown"
            >
              <NavDropdown.Item as={Link} to="/Brunch">
                Brunch Palace
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="#Dough & Stone">
                Dough & Stone
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Smoke">
                Steak & Smokehouse
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="navbar-user-icon">
            <Link to="/login">
              <FaRegUserCircle size="1.5em" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
