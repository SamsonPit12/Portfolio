import React from 'react';
import './Styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';


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
      <Container >
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


const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  padding-top: 10vh;

  @media (max-width: 500px) {
    width: 90vh;
    margin-left: 15vh;
    padding-top: 1vh;
  }

  @media (min-width: 992px) {
    margin-left: 25vh;
  }

  @media (min-width: 1200px) {
      margin-left: 35vh;
  }
`

