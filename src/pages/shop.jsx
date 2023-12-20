import React, { useState, useEffect, useContext } from 'react';
import Hero from '../Hero/hero';
import Footer from './footer';
import './shop.css';
import { CartContext } from './cartcontext';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const { dispatch } = useContext(CartContext);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setSelectedAmount(1);
  };

  const handleAmountChange = (e) => {
    const amount = parseInt(e.target.value, 10);
    setSelectedAmount(amount || 1);
  };

  const handleIncrement = () => {
    setSelectedAmount(prevAmount => prevAmount + 1);
  };

  const handleDecrement = () => {
    if (selectedAmount > 1) {
      setSelectedAmount(prevAmount => prevAmount - 1);
    }
  };

  const handleCloseSidebar = () => {
    setSelectedProduct(null);
    setSelectedAmount(1);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch({
        type: 'ADD_TO_CART',
        product: selectedProduct,
        quantity: selectedAmount,
      });
      setSelectedProduct(null);
      setSelectedAmount(1);
    }
  };

  const renderProductDetails = () => {
    if (!selectedProduct) {
      return null;
    }

    return (
      <div className="product-details-sidebar">
        <img src={selectedProduct.image} alt={selectedProduct.title} />
        <h3>{selectedProduct.title}</h3>
        <p>{selectedProduct.category}</p>
        <p>${selectedProduct.price}</p>
        <p>{selectedProduct.description}</p>
        <label htmlFor="amount">Amount:</label>
        <div className="amount-control">
          <button className="amounts" onClick={handleDecrement}>-</button>
          <input
            type="number"
            id="amount"
            value={selectedAmount}
            onChange={handleAmountChange}
            min={1}
          />
          <button className="amounts" onClick={handleIncrement}>+</button>
        </div>
        <div className='buttons'>
          <button className='addcart-btn' onClick={handleAddToCart}>
            Add to cart
          </button>
          <button onClick={handleCloseSidebar}>Close</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Hero />
      <div className='shop-products'>
        <h2>Shop Products</h2>
        <ul className='product-list'>
          {products.map(product => (
            <li key={product.id} onClick={() => handleCardClick(product)}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
      {renderProductDetails()}
      <Footer />
    </div>
  );
};

export default Shop;
