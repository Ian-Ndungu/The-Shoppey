import React, { useState, useEffect } from 'react';
import './men.css'; 
import { RiCloseLine } from 'react-icons/ri';

function MensClothing({ onAddToCart }) {
  const [mensClothingData, setMensClothingData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/men\'s%20clothing');
        const data = await response.json();
        setMensClothingData(data);
      } catch (error) {
        console.error('Error fetching men\'s clothing data:', error);
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
    <div className='mens-clothing'>
      <h2>Men's Clothing</h2>
      <ul className='map'>
        {mensClothingData.map((product) => (
          <li key={product.id} onClick={() => handleCardClick(product)}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="product-details-sidebar">
          <button className="close-button" onClick={handleCloseSidebar}><RiCloseLine/></button>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <h3>{selectedProduct.title}</h3>
          <p>${selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={selectedAmount}
            onChange={handleAmountChange}
            min={1}
          />
          <div className='buttons'>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MensClothing;
