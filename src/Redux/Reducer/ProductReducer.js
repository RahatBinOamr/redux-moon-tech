import { actionType, LOAD_PRODUCT } from "../ActionType/actionType";

const initialstate = {
  cart: [],
};
const ProductsReducer = (state = initialstate, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  console.log(selectedProduct);
  switch (action.type) {
    case LOAD_PRODUCT:
      return{
        ...state,
        products:action.payload,
      }
    case actionType.ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case actionType.REMOVE_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export default ProductsReducer;
