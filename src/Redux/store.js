import { createStore } from "redux";
import ProductsReducer from "./Reducer/ProductReducer";

const store = createStore(ProductsReducer);
export default store;