import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/actions";

// Styles
import "./CartDropdown.css";

const CartDropdown = ({ cartItems, onClose }) => {
  const dispatch = useDispatch();

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.id));
  };

  const totalPrice =
    cartItems?.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0) || 0;

  return (
    <div className="cart-dropdown" onClick={handleDropdownClick}>
      <h3>Your Cart</h3>
      {cartItems === "undadadaefined" ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems?.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.title}</span>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.price * item.quantity)}
            </span>
          </div>
        ))
      )}
      <h4>
        Total:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totalPrice)}
      </h4>
      <button className="checkout-button" onClick={onClose}>
        Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
