import React from 'react';
import './Styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

import NavbarHeader from './Components/Navbar/Navbar';
import Landing from './Components/Body/Landing';
import About from './Components/Body/About';
import ProjectCards from './Components/Body/ProjectCards';
import ContactForm from './Components/Body/ContactForm';
import SideContainer from './Components/Body/Sidebar';



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
