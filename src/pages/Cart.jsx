import React, { useContext } from 'react';
import { CartContext } from '../pages/cartcontext';
import { Link } from 'react-router-dom';
import { RiAddFill, RiDeleteBinLine, RiSubtractFill } from 'react-icons/ri';
import './Cart.css'

export const Cart = () => {
  const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

  const calculateTotalPrice = (cartItems) => cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <>
      {shoppingCart.length !== 0 && <h1>Cart</h1>}
      <div className="cart-container">
        {shoppingCart.length === 0 && (
          <>
            <div>No items in your cart...</div>
            <div><Link to="/">Return to Home page</Link></div>
          </>
        )}
        {shoppingCart && shoppingCart.map((cart) => (
          <div className="cart-card" key={cart.id}>
            <div className="cart-img">
              <img src={cart.image} alt={cart.title} />
            </div>

            <div className="cart-name">{cart.title}</div>

            <div className="cart-price-orignal">$ {cart.price}.00</div>

            <div className="inc" onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}>
              <RiAddFill />
            </div>

            <div className="quantity">{cart.qty}</div>

            <div className="dec" onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}>
              <RiSubtractFill />
            </div>

            <div className="cart-price">$ {(cart.price * cart.qty).toFixed(2)}</div>

            <button className="delete-btn" onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}>
              <RiDeleteBinLine />
            </button>
          </div>
        ))}
        {shoppingCart.length > 0 && (
          <div className="cart-summary">
            <div className="cart-summary-heading">Cart-Summary</div>
            <div className="cart-summary-price">
              <span>Total Price</span>
              <span>$ {calculateTotalPrice(shoppingCart).toFixed(2)}</span>
            </div>
            <div className="cart-summary-price">
              <span>Total Qty</span>
              <span>{totalQty}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
