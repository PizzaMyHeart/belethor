import React from 'react';
import './Home.css';
import '../styles/main.css'
import ProductContainer from './ProductContainer';



function Home(props) {
    return (
        <div className="home">
        <img src="https://c4.wallpaperflare.com/wallpaper/535/182/424/whiterun-the-elder-scrolls-the-elder-scrolls-v-skyrim-video-games-custom-hd-wallpaper-preview.jpg" alt=""/>
        <ProductContainer 
            cartItems={ props.cartItems }
            setCartItems={ props.setCartItems }
            totalPrice = { props.totalPrice }
            setTotalPrice = { props.setTotalPrice }
            data = { props.data }/>
        </div>
    )
}










export default Home;