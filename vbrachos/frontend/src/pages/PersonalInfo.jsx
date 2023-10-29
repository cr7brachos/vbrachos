import CV from "../seeders/cv.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { PersonalData } = CV;
const { Name, Birthday, Address, MaritalStatus, PhoneNumber, Email } = PersonalData;

const Personalinfo = () => {
    return (

        <Container style={{marginBottom:150}}>
            <Row style={{marginTop:10, marginBottom:50}}>
                <Col className="text-center" lg={2} md={2} xs={2}>left column</Col>

                <Col className="text-center" lg={8} md={8} xs={8}>
                    <Container fluid>
                        
                    <div>
                        <h6>Name: {Name}</h6>
                        <h6>Birthday: {Birthday}</h6>
                        <h6>Address: {Address}</h6>
                        <h6>Marital Status: {MaritalStatus}</h6>
                        <h6>Phone: {PhoneNumber}</h6>
                        <h6>Email: {Email}</h6>
                    </div>   
                        
                        
                        
                    </Container>
                </Col>

                <Col className="text-center" lg={2} md={2} xs={2}>right column</Col>
            </Row>
        </Container>

        
    )
}

export default Personalinfo;