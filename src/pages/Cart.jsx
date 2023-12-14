import React from "react";
import "./Cart.css";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

function Cart({ cartItems, onCheckout, onDeleteItem }) {
  const calculateTotal = (item) => item.amount * item.product.price;

  const calculateBill = () =>
    cartItems.reduce((sum, item) => sum + calculateTotal(item), 0);

  const createOrder = async () => {
    const order = {
      intent: "capture", // Indicates immediate capture of funds
      purchase_units: [
        {
          amount: {
            currency_code: "USD", // Update based on your currency
            value: calculateBill(), // Total bill amount
          },
          description: "Your Order Payment",
        },
      ],
    };

    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      return data.order;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PayPalScriptProvider
      clientId="YOUR_PAYPAL_CLIENT_ID" // Replace with your PayPal client ID
      sandboxMode={process.env.NODE_ENV === "development"} // Adjust for production
    >
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.product.image} alt={item.product.title} />
              <div className="item-details">
                <p>{item.product.title}</p>
                <p>Amount: {item.amount}</p>
                <p>Price: ${item.product.price}</p>
                <p>Total Price: ${calculateTotal(item)}</p>
                <button onClick={() => onDeleteItem(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="checkout">
          <p>Total Bill: ${calculateBill()}</p>
          <PayPalButtons
            createOrder={() => createOrder()}
            onApprove={(data, actions) => {
              console.log("Payment approved:", data);
              onCheckout(data); // Pass payment data to your checkout handler
            }}
            onError={(error) => {
              console.error("Payment error:", error);
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default Cart;
