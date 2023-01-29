import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import cartCurrent from "./applyMiddleware/cartCounter";
import rootReducer from "./Reducer/rootReducer";

const store = createStore(rootReducer, applyMiddleware(cartCurrent,thunk));
export default store;
