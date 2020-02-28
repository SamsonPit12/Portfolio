import React from 'react';
import styles from '../../Styles/ProjectCards.module.css';
import {Card, Button, CardGroup, Container} from 'react-bootstrap';


const ProjectCard = () =>{
    return(

<Container>
    <CardGroup>
        <Card>
            <Card.Img variant="top" src="https://www.irdes.fr/imgs2017/images/about-imgs.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.irdes.fr/imgs2017/images/about-imgs.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.irdes.fr/imgs2017/images/about-imgs.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </CardGroup>
</Container>
        
    );
}

export default ProjectCard