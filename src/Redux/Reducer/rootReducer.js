import { combineReducers } from "redux";
import { filterReducer } from "./filterReduer";
import ProductsReducer from "./ProductReducer";

const rootReducer = combineReducers({
    product: ProductsReducer,
    filter: filterReducer
});
export default rootReducer;
