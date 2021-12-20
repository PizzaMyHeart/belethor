import React from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import './Checkout.css'




function Checkout(props) {
    const cartItems = props.cartItems;
    const setCartItems = props.setCartItems;
    const totalPrice = props.totalPrice;
    const setTotalPrice = props.setTotalPrice;

    function addToCart(productName, price) {
        console.log(productName + ' added to cart.');
        let quantity;
        if (Object.keys(cartItems).includes(productName)) {
            console.log(productName);
            quantity = Number(cartItems[productName]) + 1;
        } else {
            quantity = 1
        }
        
        setCartItems({...cartItems, [productName]: quantity});
        console.log(price);
        setTotalPrice(totalPrice + price);
        
    }
    return (
        <div className="checkout grid place-items-center h-screen">
            Checkout.
            <Cart 
            className="w-screen"
            cartItems={ cartItems } 
            setCartItems={ setCartItems } 
            totalPrice = { totalPrice }
            setTotalPrice={ setTotalPrice }
            addToCart = { addToCart }
            data = {props.data} />
            <button><Link to="/">Back to store</Link></button>
        </div>
    )
}

export default Checkout;