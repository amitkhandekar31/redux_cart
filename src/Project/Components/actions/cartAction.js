// import { ADD_TO_CART } from "../types"
export const SET_LIST = "SET_LIST"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const SUB_QUANTITY = "SUB_QUANTITY"
export const ADD_QUANTITY = "ADD_QUANTITY"


export const setList = (data) => {
    return {
        type: SET_LIST,
        payload: data
    }
}
export const addToCart = (id) => {
    console.log("add to card id", id)
    return {
        type: ADD_TO_CART,
        id
    }

}
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}