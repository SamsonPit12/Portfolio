import React from 'react';
// import {Container} from 'react-bootstrap';
import {Styles, Container } from '../Styles/AboutStyle.js';



const About = () =>{
    return(
        <Styles>
            <Container id='about'>
                    <h3>About Me</h3>
                    <p>
                        Hi, I'm Eric. I'm a self-taught web developer based in the Washington D.C. metro. My objective is simply to become the best developer 
                        that I can be and to contribute to the tech industry all that I can. Excited to be at the deployment phase of my new career as a developer, 
                        I enjoy being able to be challenged daily in which this path can provide. My education includes a B.B.A. in Management and an AWS Cloud 
                        Practitioner cert, which I look to progress on the AWS developer cert path.                  
                    </p>

                    <h5>Current Dev Experience:</h5>
                    <p>
                        Currently supporting a small government contractor looking to expand outside of their normal customer base. I'm tasked with building a 
                        web application from scratch that provides the customer with a way to create and manage new and existing data. After listening to the customer explain their pain points, 
                        I decided to move forward using the MERN stack and the end product will be deployed into AWS. I do work with the customer and a Project Lead but I'm the sole developer for this project. 
                    </p>

            </Container>
        </Styles>        
    );
}



export default About