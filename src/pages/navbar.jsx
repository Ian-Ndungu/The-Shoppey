import React, { useState, useEffect } from 'react';
import { RiMenLine, RiRobotLine, RiShoppingCartLine, RiStore2Line, RiWomenLine } from 'react-icons/ri';
import './navbar.css';
import shopLogo from "../images/e-commerce.jpg";
import { Link } from 'react-router-dom';

function Navbar({ cartItems }) {
  // State to manage the active menu and cart count
  const [menu, setMenu] = useState('sharp');
  const [cartCount, setCartCount] = useState(0);

  // Update cartCount when cartItems change
  useEffect(() => {
    setCartCount(cartItems?.length ?? 0);
  }, [cartItems]);

  return (
    <div className='navbar'>
      <div className='Logo'>
        <img className='logo-img' src={shopLogo} alt='' />
        <p>THE SHOPPEY</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu('shop') }}>
          <Link style={{ textDecoration: 'none' }} to='/'><RiStore2Line />Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('mens') }}>
          <Link style={{ textDecoration: 'none' }} to='/mens'><RiMenLine />Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('womens') }}>
          <Link style={{ textDecoration: 'none' }} to='/womens'><RiWomenLine />Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('electronics') }}>
          <Link style={{ textDecoration: 'none' }} to='/electronics'><RiRobotLine />Electronics</Link>
          {menu === "electronics" ? <hr /> : <></>}
        </li>
      </ul>
      <div className='cart'>
        <Link style={{ textDecoration: 'none' }} to='/cart'><RiShoppingCartLine className='cart-icon' /></Link>
        <div className="nav-cart-count">{cartCount}</div>
      </div>
    </div>
  );
}

export default Navbar;
