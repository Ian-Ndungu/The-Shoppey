import React, { useState, useEffect, useContext } from 'react';
import { RiLoginBoxLine, RiMenLine, RiRobotLine, RiShoppingCartLine, RiStore2Line, RiWomenLine } from 'react-icons/ri';
import './navbar.css';
import shopLogo from "../images/e-commerce.jpg";
import { Link, useNavigate } from 'react-router-dom';
import {signOut, auth} from "../firebase"
import { CartContext } from './cartcontext';

function Navbar({ cartItems }) {
  // State to manage the active menu and cart count
  const [menu, setMenu] = useState('sharp');

  // useEffect(() => {
  //   setCartCount(cartItems?.length ?? 0);
  // }, [cartItems]);
  const { shoppingCart } = useContext(CartContext);
  const navigate = useNavigate()

    const handleSignOut = () => {
      signOut(auth).then(()=>{
        console.log("sign out successful")
        navigate("/login")
      }).catch(error=>{
        console.log(error)
      })
      

    }

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
        <Link style={{ textDecoration: 'none' }} to='/cart'><RiShoppingCartLine className='cart-icon' />Cart</Link>
        <div className="nav-cart-count">{shoppingCart.length}</div>
      </div>
      {!auth?.currentUser?.email && (<div className='login'>
        <Link style={{ textDecoration: 'none' }} to='/login'><RiLoginBoxLine className='user-icon' />Login</Link>
      </div>)}
      {auth?.currentUser?.email &&( <div className='sign-out'>
        <button className='Authentication' onClick={handleSignOut}>Sign Out</button>
      </div>)}
     
    </div>
  );
}

export default Navbar;
