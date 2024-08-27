import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id); 

    // if found then increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
        
    }


    // return a new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity:1 }];
}

    const addCartItemVB = (cartItemsVB, nameVB) => {
        return cartItemsVB.map((item)=> item === nameVB ? { ...cartItemsVB, quantity: + 1 } : { ...cartItemsVB, quantity: 1 } )
    }

export const CartContext = createContext({
    isCartopen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemsVB: [], 
    addCartItemVB: () => {}
})

export const CartProvider = ({ children }) => {
    const [isCartopen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const [cartItemsVB, setCartItemsVB] = useState([]);
    const addItemVB = (nameVB) => {
        setCartItemsVB(addCartItemVB(cartItemsVB, nameVB))
    }

    const value = { isCartopen, setIsCartOpen, cartItems, addItemToCart, cartItemsVB, addItemVB };

    
    
    return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>

}