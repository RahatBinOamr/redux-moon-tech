import { TOGGLE_BRAND, TOGGLE_STOCK } from "../ActionType/actionType"

export const toggleBrand =(brandName)=>{
    return {
        type: TOGGLE_BRAND,
        payload: brandName,
    }
}
export const toggleStock = ()=>{
    return{
        type:TOGGLE_STOCK
    }
}