import "./cart-dropdown.styles.scss"; 
import Button from 'react-bootstrap/Button';

const CartDropdown = () => {

return (
    <div className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button variant="outline-dark">GO TO CHECKOUT</Button>
    </div>
)

}

export default CartDropdown;