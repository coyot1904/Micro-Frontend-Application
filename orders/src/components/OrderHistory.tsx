import React from "react";
import { useSelector } from "react-redux";

import "./OrderHistory.css";

const OrderHistory: React.FC = () => {
  const orders = useSelector((state: any) => state.products.orders);

  return (
    <div className="order-history">
      <h2 className="title">Order History</h2>
      {orders?.length === 0 ? (
        <p className="empty-message">No orders found.</p>
      ) : (
        orders?.map((order: any) => (
          <div key={order.id} className="order-item">
            <h3 className="order-id">Order ID: {order.id}</h3>
            <p className="user-id">User ID: {order.userId}</p>
            <p className="order-date">Date: {order.date}</p>
            <h4 className="product-title">Products:</h4>
            <ul className="product-list">
              {order.products.map((product: any, index: number) => (
                <li key={index} className="product-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <span className="product-name">{product.name}</span>
                    <span className="product-quantity">
                      Quantity: {product.quantity}
                    </span>
                    <span className="product-price">
                      Price: ${product.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
