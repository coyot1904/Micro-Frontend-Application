import { Order } from "../types";

export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (order: Order) => ({
  type: ADD_ORDER,
  payload: order,
});
