import { actionType } from "../ActionType/actionType";

const initialstate = {
  cart: [],
};
const ProductsReducer = (state = initialstate, action) => {
  const selectedProduct = state.cart.find(
    (product) => product.id === action.payload.id
  );
  console.log(selectedProduct);
  switch (action.type) {
    case actionType.ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedProduct.id
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
          (product) => product.id !== selectedProduct.id
        );

        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default ProductsReducer;
