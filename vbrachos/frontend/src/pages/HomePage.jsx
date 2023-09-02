
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import CarouselSlideComponent from "../components/CarouselSlideComponent";
import CardComponent from '../components/CardComponent';

const HomePage = () => {
    return (
        <Container style={{marginBottom:150}}>
            <Row style={{marginTop:10, marginBottom:50}}>
                <Col className="text-center" lg={2} md={2} xs={2}>left column</Col>
                
                <Col className="text-center" lg={8} md={8} xs={8}>
                    <Container fluid>
                        <Row className="text-center mb-5">
                            <Col>
                                <h1 className="mainmoto">Be the solution of the problem, not part of the problem</h1>
                            </Col>
                        </Row>
                        <Row className="text-center mb-5">
                            <Col className='text-center mt-1'>
                                <CardComponent 
                                    title="Leadership"
                                    text="Yes, we are in the right jungle!" 
                                    image="/images/leadership.png"   
                                    />
                            </Col>
                            <Col className='text-center mt-1'>
                                <CardComponent 
                                    title="Management"
                                    text="Yes, we know how to win this jungle!"
                                    image="/images/operation.png"     
                                    />
                            </Col>
                            <Col className='text-center mt-1'>
                                <CardComponent 
                                    title="Team culture"
                                    text="Yes, we are a real team!" 
                                    image="/images/team.png"    
                                    />
                            </Col>
                            <Col className='text-center mt-1'>
                                <CardComponent 
                                    title="Time "
                                    text="Do the important, not the urgent!" 
                                    image="/images/time-management.png"    
                                    />
                            </Col>
                            <Col className='text-center mt-1'>
                                <CardComponent 
                                    title="Effectiveness"
                                    text="Begin with the end in mind!" 
                                    image="/images/target.png"    
                                    />
                            </Col>
                            <Col className='text-center mt-1'>
                                <CardComponent 
                                    title="Principles"
                                    text="Be principles centered, the right guide!" 
                                    image="/images/balance.png"    
                                    />
                            </Col>
                        </Row>                        
                    </Container>
                </Col>
                    
                    
                <Col className="text-center" lg={2} md={2} xs={2}>right column</Col>
            </Row>
            
            
    </Container>
    )
}

export default HomePage;






  
 