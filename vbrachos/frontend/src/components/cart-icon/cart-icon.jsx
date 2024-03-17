import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"; 
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Carticon = () => {

    const {isCartopen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartopen = () => setIsCartOpen(!isCartopen);

    return (
        <div className="cart-icon-container" onClick={toggleIsCartopen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )

}

export default Carticon;