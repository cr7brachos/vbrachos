import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';


function CardComponent({ product }) {
    const { title, text, image } = product;
    const { addItemToCart, cartItemsVB } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

  return (
    <Card style={{ width: '12rem'}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <LinkContainer to={`/${title.toLowerCase()}`} >
          <Button variant="primary" onClick={addProductToCart}>Learn more</Button>
        </LinkContainer>
        
      </Card.Body>
    </Card>
  );
}

export default CardComponent;