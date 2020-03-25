import React from 'react';
import {Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import {Styles, ButtonCode, ButtonApp } from '../../Styles/ProjectCardStyles.js';
import test1 from '../../testpic.png'
import patatap from '../../patatap.png'
import spotify from '../../spotify-api.png'



const ProjectCard = () =>{
    return(

<Styles>
<Container>
    <h3>Projects</h3>
    <CardDeck>
        <Row >
            <Col lg={4} md={6}>
                <Card >            
                    <Card.Img variant="top" src={test1} />
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
                    <Card.Img variant="top" src={spotify} />
                    <Card.Body>
                        <Card.Title>Spotify Api App</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.he card's content.
                        </Card.Text>
                        <ButtonCode>Code</ButtonCode>
                    </Card.Body>                                
                </Card>
            </Col>
            <Col lg={4} md={6}>
                <Card>
                    <Card.Img variant="top" src={patatap} />
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