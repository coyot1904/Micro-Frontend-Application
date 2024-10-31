import { createStore, combineReducers } from "redux";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  products: productReducer,
  orderReducer,
});

const store = createStore(rootReducer);

export default store;
