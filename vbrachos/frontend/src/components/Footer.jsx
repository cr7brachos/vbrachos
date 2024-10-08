import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 


const Footer = () => {
  return (
    <footer className="footer">
        <Container fluid>
            <Row className="mt-5">
                <Col className="bg-dark text-white text-center py-5">
                  <img src="/images/Robot/3.png" alt="robot" width={30} height={30}/>Copyright &copy; VBr-2023</Col>
            </Row>
        </Container>
    </footer>
    
  );
}




export default Footer;