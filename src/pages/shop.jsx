import React, { useState, useEffect } from 'react';
import Hero from '../Hero/hero';
import Footer from './footer';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setSelectedColor(null);
    setSelectedSize(null);
  };

  const handleCloseSidebar = () => {
    setSelectedProduct(null);
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
        <button onClick={handleCloseSidebar}>Close</button>
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
      <Footer/>
    </div>
  );
};

export default Shop;
