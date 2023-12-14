import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Electronics from './pages/electronics';
import Cart from './pages/Cart';
import WomenClothing from './pages/womens';
import MenClothing from './pages/men';
import Shop from './pages/shop';
// import Login from './pages/login';
import Jewelery from './pages/jewelery';
import About from './pages/about';


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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'element={<Shop />}/>
          <Route path='/mens'element={<MenClothing onAddToCart={handleAddToCart}/>}/>
          <Route path='/womens'element={<WomenClothing onAddToCart={handleAddToCart}/>}/>
          <Route path='/electronics'element={<Electronics onAddToCart={handleAddToCart} />}/>
          <Route path='/cart' element={<Cart cartItems={cart} onCheckout={handleCheckout} onDeleteItem={handleDeleteItem} />} />
          <Route path='/jewelery' element={<Jewelery onAddToCart={handleAddToCart}/>}/>
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
