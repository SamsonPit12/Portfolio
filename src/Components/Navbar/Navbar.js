import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
// import logo from './../../logo.svg';
import test1 from '../../fakeresume.pdf';



class Header extends React.Component {
    render(){
        return(
            <Navbar bg="light" expand="lg" fixed='top'>
                <Navbar.Brand href="#home">      
                {/* <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                />  */}
                Eric</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/link">Link</Nav.Link>
                        <Nav.Link href="/link">Link</Nav.Link>
                        <Nav.Link href="/link"><a download href={test1}>Download Resume </a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;