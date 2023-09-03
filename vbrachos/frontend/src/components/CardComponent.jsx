import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';


function CardComponent({ title, text, image }) {

  return (
    <Card style={{ width: '12rem'}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <LinkContainer to={`/${title.toLowerCase()}`} >
          <Button variant="primary">Learn more</Button>
        </LinkContainer>
        
      </Card.Body>
    </Card>
  );
}

export default CardComponent;