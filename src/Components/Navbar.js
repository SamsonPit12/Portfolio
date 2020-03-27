import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Styles from '../Styles/NavbarStyle';
import logo from '../Images/e-logo.png';
import {Link, animateScroll as scroll} from  'react-scroll';



class NavbarHeader extends React.Component {
    render(){
        return(
            <Styles>
                <Navbar bg="dark" expand="lg" fixed='top'>
                    <Navbar.Brand href="#home" onClick={() =>
                        scroll.scrollToTop()
                    }>      
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className='nav-link' to="about" smooth={true} duration={500}>About Me</Link>
                            <Link className='nav-link' to="projects" smooth={true} duration={500}>Projects</Link>
                            <Link className='nav-link' to="contact" smooth={true} duration={500}>Contact Me</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}

export default NavbarHeader;