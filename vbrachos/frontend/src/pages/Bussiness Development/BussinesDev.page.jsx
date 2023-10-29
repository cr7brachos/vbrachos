import BussinessDevelopmentCard from "../../components/Bussiness Development Card/Bussiness-development.card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import DATA from "../../seeders/BuDevSeeder.json";


const BussinessDevelopmentPage = () => {
    return (
        <Container style={{marginBottom:150}}>
            <Row style={{marginTop:10, marginBottom:50}}>
                <Col className="text-center" lg={2} md={2} xs={2}>left column</Col>

                <Col className="text-center" lg={8} md={8} xs={8}>
                    <Container fluid>
                        
                        {
                            DATA.map(({id, title, target, text, image1, image2, image3}) => (
                                <Row className="mb-5" key={id}>
                                    <Col>
                                        <BussinessDevelopmentCard 
                                            title={title} 
                                            target={target}
                                            text={text}
                                            image1={image1}
                                            image2={image2}
                                            image3={image3}>

                                        </BussinessDevelopmentCard>
                                    </Col>                            
                                </Row>
                            ))
                        }
                        
                        
                        
                    </Container>
                </Col>

                <Col className="text-center" lg={2} md={2} xs={2}>right column</Col>
            </Row>
        </Container>
    )
}; 

export default BussinessDevelopmentPage;