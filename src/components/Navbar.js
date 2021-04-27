import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../logo.svg';

const Navigation = ({user}) => {

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
                { user ?
                <Nav className="mr-auto">
                <Nav.Link className="navigation--link" href="/links">Links</Nav.Link>
                <Nav.Link className="navigation--link" href="/body-map">Body map</Nav.Link>
                <Nav.Link className="navigation--link" href="/search">Search</Nav.Link>
                <Nav.Link className="navigation--link" href="/profile"><small><i className="fas fa-user"></i></small> { user.name }</Nav.Link>
                </Nav>
                : "" }
            </Navbar>
        </>
    );
}

export default Navigation