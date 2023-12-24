import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Electronics from './pages/electronics';
import Cart from './pages/Cart';
import WomenClothing from './pages/womens';
import MenClothing from './pages/men';
import Shop from './pages/shop';
import {Login} from './pages/login';
import Signup from './pages/signup';
import Jewelery from './pages/jewelery';
import About from './pages/about';
import './App.css'
import { CartContextProvider } from './pages/cartcontext';
import RequireAuth from './components/RequireAuth';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, amount) => {
    setCart([...cart, { product, amount }]);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  const handleCheckout = () => {
    setCart([]); 
    alert('Checkout successful! Thank you for your purchase.');
  };

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<RequireAuth/>}>
            <Route path='/'element={<Shop />}/>
            <Route path='/mens'element={<MenClothing onAddToCart={handleAddToCart}/>}/>
            <Route path='/womens'element={<WomenClothing onAddToCart={handleAddToCart}/>}/>
            <Route path='/electronics'element={<Electronics onAddToCart={handleAddToCart} />}/>
            <Route path='/cart' element={<Cart cartItems={cart} onCheckout={handleCheckout} onDeleteItem={handleDeleteItem} />} />
            <Route path='/jewelery' element={<Jewelery onAddToCart={handleAddToCart}/>}/>
            <Route path='/about' element={<About />} />
            
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
