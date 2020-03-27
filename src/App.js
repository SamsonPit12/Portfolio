import React from 'react';
import './Styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

import NavbarHeader from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import ProjectCards from './Components/ProjectCards';
import ContactForm from './Components/ContactForm';
import SideContainer from './Components/Sidebar';



function App() {
  return (
    <div className="App">
      <SideContainer />
      <Container style={{marginLeft: '35vh'}}>
        <NavbarHeader />
        <Landing />
        <About />
        <ProjectCards />
        <ContactForm />
      </Container>
    </div>
  );
}

export default App;
