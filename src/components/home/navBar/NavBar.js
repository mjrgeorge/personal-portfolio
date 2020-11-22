import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <>
            <ParticlesBg type="random" bg={true} />
            <Navbar bg="transparent" expand="lg">
                <Link to="/home">
                    <Navbar.Brand><h2 style={{ fontVariant: "small-caps" }} className="text-danger font-weight-bolder mt-4">
                        <FontAwesomeIcon className="text-info" icon={faCode} />
                        Jubayer Rahman
                        </h2></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="h4 text-danger font-weight-bold ml-4" to="/home">Home</Link>
                        <Link className="h4 text-danger font-weight-bold ml-4" to="/projects">Projects</Link>
                        <Link className="h4 text-danger font-weight-bold ml-4" to="/blogs">Blogs</Link>
                        <Link className="h4 text-danger font-weight-bold ml-4" to="/cv">CV</Link>
                        <Link className="h4 text-danger font-weight-bold ml-4" to="/about">About</Link>
                        <Link className="h4 text-danger font-weight-bold ml-4" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;