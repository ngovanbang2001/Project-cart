import { combineReducers } from "redux";
import products from "./products.js";
import carts from "./carts.js";
const myReducer = combineReducers({ products, carts });

export default myReducer;
