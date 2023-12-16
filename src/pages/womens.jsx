import React, { useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './womens.css';

function WomensClothing({ onAddToCart }) {
  const [womensClothingData, setWomensClothingData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
        const data = await response.json();
        setWomensClothingData(data);
      } catch (error) {
        console.error('Error fetching women\'s clothing data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setSelectedAmount(1);
  };

  const handleAmountChange = (e) => {
    const amount = parseInt(e.target.value, 10);
    setSelectedAmount(amount || 1);
  };

  const handleIncrement = () => {
    setSelectedAmount((prevAmount) => prevAmount + 1);
  };

  const handleDecrement = () => {
    if (selectedAmount > 1) {
      setSelectedAmount((prevAmount) => prevAmount - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      onAddToCart(selectedProduct, selectedAmount);
      setSelectedProduct(null);
      setSelectedAmount(1);
    }
  };

  const handleCloseSidebar = () => {
    setSelectedProduct(null);
    setSelectedAmount(1);
  };

  return (
    <div className='womens-clothing'>
      <h2>Women's Clothing</h2>
      <div className='map'>
        <ul className='map'>
          {womensClothingData.map((product) => (
            <li key={product.id} onClick={() => handleCardClick(product)}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
      {selectedProduct && (
        <div className="product-details-sidebar">
          <button className="close-button" onClick={handleCloseSidebar}><RiCloseLine /></button>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <h3>{selectedProduct.title}</h3>
          <p>${selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
          <label htmlFor="amount">Amount:</label>
          <div className="amount-control">
            <button className='amounts' onClick={handleDecrement}>-</button>
            <input
              type="number"
              id="amount"
              value={selectedAmount}
              onChange={handleAmountChange}
              min={1}
            />
            <button className='amounts' onClick={handleIncrement}>+</button>
          </div>
          <div className='buttons'>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WomensClothing;
