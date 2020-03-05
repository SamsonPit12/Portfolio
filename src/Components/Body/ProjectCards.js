import React from 'react';
import {Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
import Styles from '../../Styles/ProjectCardStyles.js';
import test from '../../testpic.png'



const ProjectCard = () =>{
    return(

<Styles>
<Container>
    <h3>Projects</h3>
    <CardDeck>
        <Row >
            <Col lg={4}>
                <Card >            
                    <a href='https://ericd12.github.io/'>
                    <Card.Img variant="top" src={test} />
                    </a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button>Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                <a href='https://ericd12.github.io/'>
                    <Card.Img variant="top" src="https://www.irdes.fr/imgs2017/images/about-imgs.jpg" />
                    </a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button>Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <a href='https://ericd12.github.io/'>
                        <Card.Img variant="top" src="https://www.irdes.fr/imgs2017/images/about-imgs.jpg" />
                    </a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button>Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row >
            <Col lg={4}>
                <Card >            
                    <a href='https://ericd12.github.io/'>
                    <Card.Img variant="top" src={test} />
                    </a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
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
                        {/* <Button variant="primary">Go somewhere</Button> */}
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
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </CardDeck>
</Container>
</Styles>
        
    );
}

export default ProjectCard