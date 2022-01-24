import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (<>
      <Navbar bg="dark" variant="dark" className="pokeApp">
          <Container>
            <Navbar.Brand href="#">PokeApp</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link eventKey="Home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
      </Navbar>


   </>   
    );
};

export default Header;