import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADJUST_QTY,
} from '../constants/actionType'

export const addToCart = (itemID) => {
    return{
        type: ADD_TO_CART,
        payload: {
            id : itemID,
        }
    }
}

export const removeFromCart = (itemID) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID,
        }
    }
}

export const adjustQty = (itemID, value) => {
    return{
        type: ADJUST_QTY,
        payload:{
            id: itemID,
            qty: value,
        }
    }
}