import React from 'react';
import './App.css';
import NavbarHeader from './Components/Navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import About from './Components/Body/About'
import MyForm from './Components/Contactform/ContactForm';
import ProjectCards from './Components/Body/ProjectCards';
import { Container } from 'react-bootstrap';




function App() {
  return (

    <div className="App">
      <Container>
      <NavbarHeader /> 
      <br />
      <About />
      <br />
      <ProjectCards />
      <br />
      <MyForm />
      <br />
      </Container>
    </div>
    
  );
}

export default App;
