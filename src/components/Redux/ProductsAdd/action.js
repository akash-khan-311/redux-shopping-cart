import { ADD_MANY_QUANTITY, ADD_PRODUCTS, ADD_PRODUCT_QUANTITY, REMOVE_PRODUCT_QUANTITY } from "./actionTypes"

export const addProducts = product=> {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    }
}


export const addProductQuantity = product=> {
    return {
        type: ADD_PRODUCT_QUANTITY,
        payload: product,
    }
}
export const removeProductQuantity = product=> {
    return {
        type: REMOVE_PRODUCT_QUANTITY,
        payload: product,
    }
}

export const addManyQuantity = product=> {
    return {
        type: ADD_MANY_QUANTITY,
        payload: product,
    }
}