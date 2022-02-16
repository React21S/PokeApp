import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import {Heart, HeartFill} from 'react-bootstrap-icons';


const PokeCard = ({image, name, pokemonName, type, fav, favClick}) => {
    
    return (
        <Card className={type} bg="secondary" text="dark" key={name} style={{ width: '15rem' }}>
            <Card.Body >
                <Card.Header className="d-flex justify-content-between">
                 {name} 
                    {fav ? (<HeartFill onClick={favClick} size="30" color="red"/>):(<Heart onClick={favClick}  size="30" color="white"/>)}
                
                </Card.Header>
                <Card.Img variant="top" src={image} />
                
            </Card.Body>
            <Card.Footer className="d-grid">
                <LinkContainer to={`/${pokemonName}`}>
                    <Button className="my-3" variant="outline-light" size="sm">
                        Details
                    </Button>
                </LinkContainer>
      </Card.Footer>
        </Card>
       
    );
};

export default PokeCard;