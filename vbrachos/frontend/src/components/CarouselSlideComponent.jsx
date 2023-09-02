import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";

const CarouselSlideComponent = (props) => {
    return (
        <Container>
            <Row >
                <Col>
                    <h1>{props.text}</h1>
                    <Image src="images/leadership.jpg" roundedCircle></Image>
                </Col>
            </Row>
        </Container>
    )
}

export default CarouselSlideComponent;