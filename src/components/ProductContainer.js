import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';






function Product(props) {
    return (
        <div className="product">
            <img src={ props.img } alt=""/>
            <div>{ props.name }</div>
            <div>{ props.price }</div>
            <button className="hover:bg-slate-200" onClick={ () => props.onClick() }>Add 🛒</button>
        </div>
    )
}



function Category(props) {
    return (
        <label>
            <input type="checkbox" name={ props.objKey } defaultChecked={ props.inputChecked } onChange={ props.handleChecked }/>
            { props.objKey }
        </label>
        
    )
}





function ProductContainer(props) {
    const cartItems = props.cartItems;
    const setCartItems = props.setCartItems;
    const totalPrice = props.totalPrice;
    const setTotalPrice = props.setTotalPrice;

    const [checked, setChecked] = useState(Object.keys(props.data)); // Category checkboxes
    let inputChecked = true;
    function renderCategory(objKey) {
        return (
            <Category 
                key={ objKey } 
                objKey={ objKey }
                inputChecked={ inputChecked }
                handleChecked={ () => handleChecked(objKey) }
                />
        )
    }

    function handleChecked (category) {
        let temp = checked.slice()
        if (checked.includes(category)) temp = temp.filter(item => item !== category);
        else temp.push(category);
        setChecked(temp);
        
        inputChecked = !inputChecked;
        console.log('Checked: ', inputChecked);
    }

    

    function renderProduct(name, price, img) {
        return (
            <Product
                key={ name }
                name={ name }
                price={ price }
                img = { img }
                onClick={ () => addToCart(name, price) }
            />
        )
    }

    
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

    const products = [];
    
    return (
        <div>            

            <div>{ Object.keys(props.data).map( key => renderCategory(key)) }</div>
            
            { checked.map(category => {
                
                props.data[category].map(item => products.push(item));
            }) }
            <div className="grid grid-cols-4">
                { products.map(product => renderProduct(product['name'], product['price'], product['img'])) }
            </div>
        </div>

    )
    

}

export default ProductContainer;