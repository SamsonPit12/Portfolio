import React from 'react';
import {Container} from 'react-bootstrap';
import {Styles, LogosLinks} from '../Styles/LandingStyle.js';
import linkedin from '../Images/linkedin.svg';
import github from '../Images/github.svg';
import resumeicon from '../Images/resume-icon.png';
import resumepdf from '../Eric Dressler Resume 2020.pdf';

const LinkIn = 'https://www.linkedin.com/in/eric-dressler-38267054/';
const GitHub = 'https://github.com/ericd12';


const Landing = () =>{
    return(
        <Styles>
            <Container>
                <h1>Eric <span>Dressler</span></h1>
                <p>edressler6@gmail.com | 540-797-2291</p>
                <div>
                    <a href={LinkIn} target ="_blank" rel='noopener noreferrer'>
                        <LogosLinks src={linkedin} alt='linkedin logo' />  Linkedin
                    </a>
                    <a href={GitHub} target ="_blank" rel='noopener noreferrer'>
                        <LogosLinks src={github} alt='github logo' />  Github
                    </a>
                    <a download href={resumepdf}>
                        <LogosLinks class='logo' src={resumeicon} alt='resume logo' />  Download Resume
                    </a> 
                </div>                 
            </Container>
        </Styles>        
    );
}

export default Landing