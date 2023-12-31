import React, { useState, useEffect, useContext } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './electronics.css';
import { CartContext } from './cartcontext';

function Electronics() {
  const [electronicsData, setElectronicsData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        const data = await response.json();
        setElectronicsData(data);
      } catch (error) {
        console.error('Error fetching electronics data:', error);
      }
    };

    fetchData();
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
    setSelectedAmount((prevAmount) => prevAmount + 1);
  };

  const handleDecrement = () => {
    setSelectedAmount((prevAmount) => Math.max(prevAmount - 1, 1));
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

  const handleCloseSidebar = () => {
    setSelectedProduct(null);
    setSelectedAmount(1);
  };

  return (
    <div className='electronics'>
      <h2>Electronics</h2>
      <ul className='map'>
        {electronicsData.map((product) => (
          <li key={product.id} onClick={() => handleCardClick(product)}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="product-details-sidebar">
          <button className="close-button" onClick={handleCloseSidebar}>
            <RiCloseLine />
          </button>
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

export default Electronics;
