import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from './Components/Contactform/ContactForm';
import ProjectCards from './Components/Body/ProjectCards';




function App() {
  return (

    <div className="App">
      <Navbar /> 
      <br />
      <ProjectCards />
      <br />
      <MyForm />
      <br />
    </div>
  );
}

export default App;
