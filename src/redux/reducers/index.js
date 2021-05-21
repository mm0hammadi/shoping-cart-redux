import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
