import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import test1 from '../../fakeresume.pdf';
import Styles from '../../Styles/NavbarStyle';
import logo from './../../e-logo.png'



class NavbarHeader extends React.Component {
    render(){
        return(
            <Styles>
                <Navbar bg="dark" expand="lg" fixed='top'>
                    <Navbar.Brand href="#home">      
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
                            <Nav.Link href="/">About Me</Nav.Link>
                            <Nav.Link href="/link">Projects</Nav.Link>
                            <Nav.Link href="/link">Contact Me</Nav.Link>
                            <Nav.Link download href={test1}>Download Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}

export default NavbarHeader;