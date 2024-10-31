import React from "react";
import { useDispatch, useSelector } from "react-redux";

// redux
import { addToCart } from "../redux/actions";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/actions";

const ProductItem = ({ product, setUpdateBasket, updateBasket }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.products.cart);

  const existingItem = cartItems.find((item) => item.id === product.id);

  const productSelected = useSelector((state) =>
    state.products.filteredItems.find((item) => item.id === product.id)
  );

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
    setUpdateBasket(!updateBasket);
  };

  const handleDecrement = () => {
    if (existingItem.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
    setUpdateBasket(!updateBasket);
  };

  const handleAddToCart = () => {
    event.preventDefault();
    if (productSelected) {
      if (cartItems.length > 0) {
        const existingItem = cartItems?.find(
          (item) => item.id === productSelected.id
        );
        if (existingItem) {
          console.log("mage tekrari nis ? ", productSelected.id);
          dispatch(incrementQuantity(productSelected.id));
        } else {
          productSelected.quantity = 1;
          dispatch(addToCart(productSelected));
        }
      } else {
        productSelected.quantity = 1;
        dispatch(addToCart(productSelected));
      }
      setUpdateBasket(!updateBasket);
      console.log(cartItems);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">
        {existingItem
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price * existingItem.quantity)
          : "$" + product.price}{" "}
      </p>
      {existingItem ? (
        <div className="quantity-controls1">
          <button onClick={handleDecrement}>-</button>
          <span>{existingItem.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      ) : (
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
