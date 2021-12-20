import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home';
import Checkout from './components/Checkout';
import './App.css';
import './products.json';

function App() {
  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState(require('./products.json'));
  return (
    <main className="px-[25px]">
      <Navbar 
        cartItems={ cartItems }
        setCartItems={ setCartItems }
        totalPrice = { totalPrice }
        setTotalPrice = { setTotalPrice }
        data = { data }
      />
      <Routes>
        <Route path="/" element={ 
          <Home 
            cartItems={ cartItems }
            setCartItems={ setCartItems }
            totalPrice = { totalPrice }
            setTotalPrice = { setTotalPrice }
            data = { data }
            /> 
          }
        />
        <Route path="/about" element={ <About /> }/>
        <Route path="/checkout" element={ 
          <Checkout 
            cartItems={ cartItems }
            setCartItems={ setCartItems }
            totalPrice = { totalPrice }
            setTotalPrice = { setTotalPrice }
            data = { data }
          /> 
        }
        />
      </Routes>
    </main>
  );
}

export default App;
