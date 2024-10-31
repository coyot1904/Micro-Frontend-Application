import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers";

const rootReducer = combineReducers({
  products: orderReducer,
});

const store = createStore(rootReducer);

export default store;
