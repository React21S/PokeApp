import React from 'react';
import Card from 'react-bootstrap/Card';

const Footer = () => {
    return (
            <Card.Footer  className="text-center">Femi Adesola &copy; {new Date().getFullYear()}</Card.Footer>
    );
};

export default Footer;