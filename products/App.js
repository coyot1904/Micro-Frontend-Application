import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/actions";
import ProductList from "./components/ProductList";

import "./styles.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products"); // Use a real API
      const data = await response.json();
      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="container">
      <ProductList />
    </div>
  );
};

export default App;
