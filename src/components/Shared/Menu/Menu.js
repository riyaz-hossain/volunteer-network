import React, { useContext } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png'
import { UserContext } from "../../../App";
const Menu = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="sticky-top" style={{ fontFamily: 'Ubuntu', }}>
            <Navbar bg="dark" collapseOnSelect expand="lg" >

                <Navbar.Brand href="#home" className="ml-md-5">

                    <img style={{ width: '100px', color: 'white', filter: 'contrast(0%) brightness(500%)' }}
                        src={logo}

                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ fontSize: "25px", color: "black", background: "#fff" }} className="ml-auto" > <FontAwesomeIcon icon={faBars} /> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav style={{ textAlign: "center" }} className="ml-auto">

                        <Nav.Link
                            style={{ color: '#fff', fontWeight: '600' }}
                            className="nav-link pl-4 pr-4"
                        >
                            <Link to="/home" style={{ color: "#fff" }}>Home</Link>
                        </Nav.Link>


                        <Nav.Link to="/home" style={{ color: '#101010', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/home" style={{ color: "#fff" }}>Donation</Link>
                        </Nav.Link>

                        <Nav.Link to="/events" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/events" style={{ color: "#fff" }}>Event</Link>
                        </Nav.Link>
                        <Nav.Link to="/admin" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link to="/comingSoon" style={{ color: "#fff" }}>Blogs</Link>
                        </Nav.Link>
                        {
                            loggedInUser.name ?
                                <Nav.Link to="/" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                                    <Link to="/" style={{ color: "#fff" }}> {loggedInUser.name} </Link>
                                </Nav.Link>

                                : <>
                                    <Nav.Link to="/register" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                                        <Link to="/register" style={{ color: "#fff" }}><button className="btn btn-primary px-5">Register </button></Link>
                                    </Nav.Link>
                                    <Nav.Link to="/admin" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                                        <Link to="/admin" style={{ color: "#fff" }}> <button className="btn btn-secondary px-5">Admin </button></Link>
                                    </Nav.Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;