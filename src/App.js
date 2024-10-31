import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../components/Home";
import store from "./redux/store";

const ProductList = lazy(() => import("products/ProductList"));
const AuthApp = lazy(() => import("auth/AuthApp"));
const OrderApp = lazy(() => import("orders/OrderApp"));

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/login" element={<AuthApp />} />
              <Route path="/orders" element={<OrderApp />} />
            </Routes>
          </Suspense>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
