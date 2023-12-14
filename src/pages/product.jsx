// import React, { useState, useEffect } from 'react';

// function Hero() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='hero'>
//       <h2>Product List</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>{product.title}</li>
         
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Hero;
