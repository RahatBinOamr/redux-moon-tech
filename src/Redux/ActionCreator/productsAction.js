import { actionType } from "../ActionType/actionType"

export const addToCart = (product)=>{
return {
    type:actionType.ADD_TO_CART,
    payload: product
}
}
export const removeCart = (product)=>{
return {
    type:actionType.REMOVE_CART,
    payload: product
}
}