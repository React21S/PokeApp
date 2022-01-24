import React from 'react';
import Card from 'react-bootstrap/Card';

const PokeCard = ({image, name}) => {
    
    return (
        <Card bg="secondary" text="dark" key={name} style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={image} />
            </Card.Body>
        </Card>
       
    );
};

export default PokeCard;