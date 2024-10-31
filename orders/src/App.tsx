import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import OrderHistory from "./components/OrderHistory";

const OrderApp: React.FC = () => (
  <Provider store={store}>
    <OrderHistory />
  </Provider>
);

export default OrderApp;
