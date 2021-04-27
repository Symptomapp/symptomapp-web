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
            <Nav.Link className="navigation--link" href="/links">
              Links
            </Nav.Link>
            <Nav.Link className="navigation--link" href="/body-map">
              Body map
            </Nav.Link>
            <Nav.Link className="navigation--link" href="/search">
              Search
            </Nav.Link>
            <Nav.Link className="navigation--link" href="/profile">
              <small>
                <i className="fas fa-user"></i>
              </small>{" "}
              {user.name}
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="mr-auto">
            <Nav.Link className="navigation--link" href="/links">
              Links
            </Nav.Link>
            <NavDropdown
              title="Body map"
              className="navigation--link"
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
            <Nav.Link className="navigation--link" href="/profile">
              <small>
                <i className="fas fa-user"></i>
              </small>{" "}
              'User'
            </Nav.Link>
          </Nav>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
