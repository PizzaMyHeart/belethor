import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'
import './Home.css'
import Cart from './Cart'

function Navbar(props) {
    return (
        <nav>
            <ul className="flex">
                <li className="mr-[20px]"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="ml-auto">
                    <div id="cart-icon">Cart ({ Object.keys(props.cartItems).length })</div>
                    <div id="cart" className="bg-white right-0 pr-16 border-solid border-2 border-slate rounded-lg grid-cols-3">
                        <Cart 
                            cartItems={ props.cartItems } 
                            setCartItems={ props.setCartItems } 
                            totalPrice = { props.totalPrice }
                            setTotalPrice={ props.setTotalPrice }
                            addToCart = { props.addToCart }
                            data = { props.data }/>
                    </div>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;