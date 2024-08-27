import "./cart-dropdown.styles.scss"; 
import Button from 'react-bootstrap/Button';
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {

    const { cartItemsVB } = useContext(CartContext);

return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
        { cartItemsVB.map(item => <CartItem  key={item.id} cartItem={item}/>) }
        </div>
        <Button variant="outline-dark">GO TO CHECKOUT</Button>
    </div>
)

}

export default CartDropdown;