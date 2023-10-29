import CV from "../seeders/cv.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { StudiesInfo } = CV;
const { University:{title}, 
        University:{lessons}, 
        MBA:{titleMBA}, 
        MBA:{lessonsMBA},
        Seminars,
        Languages } = StudiesInfo;



const Studies = () => {
    return (
    
            <Container style={{marginBottom:150}}>
            <Row style={{marginTop:10, marginBottom:50}}>
                <Col className="text-center" lg={2} md={2} xs={2}>left column</Col>

                <Col className="text-center" lg={8} md={8} xs={8}>
                    <Container fluid>
                        <Row className="mb-2">
                            <div>
                                <h4>{title}</h4>
                                {
                                    lessons.map((item)=>(<h6>{item}</h6>))
                                }
                                <hr></hr>
                            </div>    
                        </Row>
                        <Row className="mb-2">
                            <div>
                                <h4>{titleMBA}</h4>
                                {
                                    lessonsMBA.map((item)=>(<h6>{item}</h6>))
                                }
                                <hr></hr>
                            </div>    
                        </Row>
                        <Row className="mb-2">
                            <div>
                                <h4>Seminars</h4>
                                {
                                    Seminars.map((item)=>(<h6>{item}</h6>))
                                }
                                <hr></hr>
                            </div>    
                        </Row>
                        <Row className="mb-2">
                            <div>
                                <h4>Languages</h4>
                                {
                                    Languages.map((item)=>(<h6>{item}</h6>))
                                }
                                <hr></hr>
                            </div>    
                        </Row>
                    </Container>   
                </Col>

                <Col className="text-center" lg={2} md={2} xs={2}>right column</Col>
            </Row>
        </Container>
    )
}

export default Studies;