import { actionType, ADD_PRODUCT, LOAD_PRODUCT } from "../ActionType/actionType"

export const loadProduct = (data)=>{
    console.log(data);
    return{
        type:LOAD_PRODUCT,
        payload:data,
    }
}
/* export const addProduct = (product)=>{
    return {
        type:ADD_PRODUCT,
        payload: product
    }
} */
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