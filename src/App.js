import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

import NavbarHeader from './Components/Navbar/Navbar'
import About from './Components/Body/About'
import ProjectCards from './Components/Body/ProjectCards';
import ContactForm from './Components/Contactform/ContactForm';




function App() {
  return (

      <Container className="App">
        <NavbarHeader /> 
        <About />
        <ProjectCards />
        <ContactForm />

      </Container>

    
  );
}

export default App;
