import React from 'react';
import {Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import {Styles, ButtonCode, ButtonApp, TechInfo } from '../Styles/ProjectCardStyles.js';
import dnd from '../Images/DnD.PNG'
import patatap from '../Images/patatap.png'
import spotify from '../Images/spotify-api.png'


const ProjectCard = () =>{
    return(

<Styles>
<Container id="projects">
    <h3>Side Projects</h3>
    <CardDeck>
        <Row >
            <Col lg={4} md={6}>
                <Card>
                    <Card.Img variant="top" src={spotify} />
                    <Card.Body>
                        <Card.Title>Spotify API App</Card.Title>
                        <Card.Text>
                            React app using hooks that's able to login using your Spotify credentials (OAuth 2), which will then
                            allow you to control playback along with providing song info.
                        </Card.Text>
                        <TechInfo>JavaScript | React | Spotify Web API | Styled-components | Font Awesome | Express | Node.js</TechInfo>
                        <a target ="_blank" rel='noopener noreferrer'href='https://github.com/ericd12/spotify-api'>
                            <ButtonCode>Code</ButtonCode>
                        </a>
                    </Card.Body>                                
                </Card>
            </Col>
            <Col lg={4} md={6}>
                <Card>
                    <Card.Img variant="top" src={patatap} />
                    <Card.Body>
                        <Card.Title>Patatap App</Card.Title>
                        <Card.Text>
                            Animation and sound kit that with the touch of a finger creates melodies charged with moving shapes.
                        </Card.Text>
                        <TechInfo>HTML | CSS | JavaScript | Paper.js | Howler.js</TechInfo>
                        <a target ="_blank" rel='noopener noreferrer'href='https://ericd12.github.io/Patatap-App/'>
                            <ButtonApp>App</ButtonApp>
                        </a>
                        <a target ="_blank" rel='noopener noreferrer'href='https://github.com/ericd12/Patatap-App'>
                            <ButtonCode>Code</ButtonCode>
                        </a>

                  
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={6}>
                <Card >            
                    <Card.Img variant="top" src={dnd} />
                    <Card.Body>
                        <Card.Title>Drag n' Drop</Card.Title>
                        <Card.Text>
                            Drag and Drop component using React-Beaufitful-DnD for drag/drop functionality that was implented into a 
                            larger project. Data is pulled from the DB to create a larger list in another DB.
                        </Card.Text>
                        <TechInfo>JavaScript | React | React-Beautiful-DnD | Express | Axios | Node.js </TechInfo>                        
                        <a target ="_blank" rel='noopener noreferrer'href='https://github.com/ericd12/task-app'>
                            <ButtonCode>Code</ButtonCode>
                        </a>                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <Row >
            <Col lg={4} md={6}>
                <Card >            
                    <a href='https://ericd12.github.io/'>
                    <Card.Img variant="top" src={patatap} />
                    </a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <ButtonCode>Code</ButtonCode>
                        <ButtonApp>App</ButtonApp>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={6}>
                <Card>
                    <Card.Img variant="top" src="https://www.irdes.fr/imgs2017/images/about-imgs.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <ButtonCode>Code</ButtonCode>
                        <ButtonApp>App</ButtonApp>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={6}>
                <Card>
                    <Card.Img variant="top" src="https://www.irdes.fr/imgs2017/images/about-imgs.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <ButtonCode>Code</ButtonCode>
                        <ButtonApp>App</ButtonApp>
                    </Card.Body>
                </Card>
            </Col>
        </Row> */}
    </CardDeck>
</Container>
</Styles>
        
    );
}

export default ProjectCard