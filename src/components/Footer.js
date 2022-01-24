import React from 'react';
import Card from 'react-bootstrap/Card';



const Footer = () => {
    return (
        <Card bg="danger"  variant="light" className="text-center">
        <Card.Footer >

        <div className="icons">
                <a href="https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/" target="_blank" rel="noreferrer" className="linkedin">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
            
                    <a href="#1" className="facebook">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>

                    <a href="https://github.com/FemiAdesola" target="_blank" rel="noreferrer" className="github">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
               
                <p>Femi Adesola &copy; {new Date().getFullYear()}</p>
            
        </Card.Footer>  

        </Card>   
      
    );
};

export default Footer;

