import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'


function Cart(props) {
    let products = [];

    Object.keys(props.data).map(key => products.push(props.data[key]));
    products = products.flat();
    console.log(products);


    function sumCartItems() {
        // Don't run this function if cart is empty
        if (Object.keys(props.cartItems).length === 0) return;
        return Object.values(props.cartItems).reduce((t, n) => t + n);
    }

    function getPrice(productName) {
        
        const product = products.filter(product => product['name'] === productName);
        return product[0]['price'];
    }

    function sumPriceProduct(price, quantity) {
        // Get the total price for a given product
        const totalPriceProduct = price * quantity;
        return totalPriceProduct;
    }


    function emptyCart() {
        props.setCartItems({});
        props.setTotalPrice(0);
    }



    function deleteCartItem(productName, price) {
        // Remove the product from the cart regardless of quantity
        props.setTotalPrice(props.totalPrice - price);
        const newCartItems = {...props.cartItems};
        delete newCartItems[productName];
        props.setCartItems(newCartItems);
        
    }

    function increaseQuantity(productName, price) {
        const newQuantity = props.cartItems[productName] + 1;
        props.setCartItems({...props.cartItems, [productName]: newQuantity});
        console.log(props.totalPrice);
        props.setTotalPrice(props.totalPrice + price);
    }

    function decreaseQuantity(productName, price) {
        const newQuantity = props.cartItems[productName] - 1;
        props.setCartItems({...props.cartItems, [productName]: newQuantity});
        props.setTotalPrice(props.totalPrice - price)
        // Remove item if quantity = 0
        if (newQuantity === 0) {
            const newCartItems = {...props.cartItems};
            delete newCartItems[productName];
            props.setCartItems(newCartItems);
        }
    }


    return (
        <>
        {console.log(props.cartItems)}     
        <div className="p-8">
            { 
                Object.keys(props.cartItems).map((productName, i) => {
                const quantity = props.cartItems[productName];
                const priceProduct = sumPriceProduct(getPrice(productName), quantity);
                const price = getPrice(productName);
                console.log('priceProduct: ' + priceProduct);
                return (
                <div key={i}>
                    <div className="">
                        <div className="mr-16">{ productName }</div>
                        <div className="flex">
                            <button className="bg-red-300 mr-8 h-8 w-8" onClick={ () => decreaseQuantity(productName, price) }>-</button>
                            <div className="mr-8">{ quantity }</div> 
                            <button className="bg-blue-300 mr-4 h-8 w-8" onClick={ () => increaseQuantity(productName, price) }>+</button>
                            <button onClick={ () => deleteCartItem(productName, priceProduct) }>&#x1f5d1;</button>
                        </div>
                    </div>
                    <div>{ getPrice(productName) } septims</div>
                    <div>{ priceProduct }</div>
                    <br></br>                        
                </div>
                );
            }) 
            }
        
        <div>{ sumCartItems() } items in cart.</div>
        <div>Total price: { props.totalPrice } septims</div>
        <button onClick={ emptyCart }>Empty cart</button>
        <div><Link to="/checkout">Checkout</Link></div>
        </div>
        
        </>
    )
}


export default Cart;