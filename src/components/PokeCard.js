import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const PokeCard = ({image, name, pokemonName}) => {
    
    return (
        <Card bg="secondary" text="dark" key={name} style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={image} />
                <LinkContainer to={`/${pokemonName}`}><Button variant="outline-light" size="sm">Details</Button></LinkContainer>
            </Card.Body>
        </Card>
       
    );
};

export default PokeCard;