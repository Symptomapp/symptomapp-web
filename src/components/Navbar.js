import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../logo.svg";

const Navigation = ({ user }) => {
  return (
    <>
      <Navbar className="navigation">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="symptomapp logo"
          />
        </Navbar.Brand>
        {user ? (
          <Nav className="mr-auto">
            <NavDropdown
              title="Body map"
              className="navigation--link color--light"
              href="/body-map"
            >
              <NavDropdown.Item href="/body-map/face">
                Face map
              </NavDropdown.Item>
              <NavDropdown.Item href="/body-map/internal">
                Internal organs map
              </NavDropdown.Item>
              <NavDropdown.Item href="/body-map/external">
                External organs map
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navigation--link" href="/search">
              Search
            </Nav.Link>
            <Nav.Link className="navigation--link" href="/links">
              Links
            </Nav.Link>
            <Nav.Link className="navigation--link" href="/profile">
              <small>
                <i className="fas fa-user color--orange"></i>
              </small>{" "}
              <span className="navigation--username">{user.name}</span>
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="mr-auto navigation--link">
            <span className="color--light">sympto</span><span className="color--lightgreen">m<strong>ap</strong></span><span className="color--light"><strong>p</strong></span>
          </Nav>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
