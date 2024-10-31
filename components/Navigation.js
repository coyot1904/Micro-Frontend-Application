import React from "react";
import "./Navigation.css";

const Navigation = () => (
  <nav className="navbar">
    <h1 className="app-title">Keyvan Mozaffari's Assignment</h1>
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/products">Product List</a>
      </li>
      <li>
        <a href="/orders">Orders</a>
      </li>
      <li>
        <a href="/login">Login/Register</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
