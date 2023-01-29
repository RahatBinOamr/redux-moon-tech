import { actionType } from "../ActionType/actionType";

const cartCurrent = (store)=>(next)=>(action)=>{
    const state = store.getState();
    const cart = state.product.cart;
    console.log(cart);
   if(action.type=== actionType.ADD_TO_CART){
    const newAction = {
        ...action,
        payload: {...action.payload, cartPosition:cart.length}
    }
    return next(newAction)
   }
   return next(action)
}
export default cartCurrent;