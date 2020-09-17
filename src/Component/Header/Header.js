import React, { useContext } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/Logo.png';
import { UserContext } from '../FireBaseAuth/auth';
import './Header.css'
const Header = () => {
    const auth = useContext(UserContext);
    const { logOut } = auth;

    const handSingOut = () => {
        logOut()
    }
    return (
        <Container className="w-100" id="header">
            <Navbar expand="lg">
                <Navbar.Brand>
                    <Link to="/home">
                        <img src={logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="">
                        <input type="text" className="header-input" placeholder="Search your Destination..." />
                    </Form>
                    <Nav className="mr-auto header-nav">
                        <Link className="header-nav-item" to="/home">Home</Link>
                        <Link className="header-nav-item" to="/">Destination</Link>
                        <Link className="header-nav-item" to="/">Blog</Link>
                        <Link className="header-nav-item" to="/">Contact</Link>
                        <Link className="header-nav-item login-btn" to="/login">Login</Link>
                        <Link onClick={() =>handSingOut()} className="header-nav-item sign-out-btn" to="/login">SingOut</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};
export default Header;