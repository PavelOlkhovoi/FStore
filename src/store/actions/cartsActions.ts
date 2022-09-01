import { Dispatch } from "redux"
import { TypeOfCartsAction, AllCartsActions } from "../../types/cart"

export const initCart = () => {
    return (dispatch: Dispatch<AllCartsActions>) => {
        dispatch({type: TypeOfCartsAction.INITIAL_CARD})
    }
}

export const addProduct= (productId: number) => {
    return (dispatch: Dispatch<AllCartsActions>) => {
        dispatch({type: TypeOfCartsAction.ADD_PRODUCT, cartId: 1, productId: productId, quantity: 1})
    }
}

export const deleteProduct= (productId: number) => {
    return (dispatch: Dispatch<AllCartsActions>) => {
        dispatch({type: TypeOfCartsAction.DELETE_PRODUCT, idCart: 1, idProduct: productId})
    }
}

export const    changeQuantity = (productId: number, quantity: number) => {
    return (dispatch: Dispatch<AllCartsActions>) => {
        dispatch({type: TypeOfCartsAction.CHANGE_QUANTITY, cartId: 1, productId, quantity})
    }
}