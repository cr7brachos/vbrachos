import SignUp from "../SignUp";
import SignIn from "../../components/sign-in-form/SignIn";
import "./authentication.styles.scss";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';



const AuthenticationComponent = () => {

    

    return (
        <Container style={{marginBottom:150}}>
            <Row style={{marginTop:10, marginBottom:50}}>
                <Col className="text-center" lg={2} md={2} xs={2}>left column</Col>

                <Col className="text-center" lg={8} md={8} xs={8}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <SignIn></SignIn>
                            </Col>
                            <Col>
                                <SignUp></SignUp>
                            </Col>
                        </Row>
                    </Container>
                </Col>

                <Col className="text-center" lg={2} md={2} xs={2}>right column</Col>
            </Row>
        </Container>
        
        
        
    )
}

export default AuthenticationComponent;