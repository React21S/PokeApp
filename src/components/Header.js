import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (<>
      <Navbar bg="dark" variant="dark" className="pokeApp">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link></LinkContainer >

            <LinkContainer to ="pokelist">
            <Nav.Link >Pokemons</Nav.Link></LinkContainer>
          
          </Nav>
      </Navbar.Collapse>
  </Container>
         
      </Navbar>


   </>   
    );
};

export default Header;