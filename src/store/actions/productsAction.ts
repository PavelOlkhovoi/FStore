import axios from "axios";
import { Dispatch } from "redux";
import { AllProductsActions, TypedOfProductsActions } from "../../types/products";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<AllProductsActions>) => {
        try {
            dispatch({type: TypedOfProductsActions.FETCH_PRODUCTS})
            const result = await axios.get('https://fakestoreapi.com/products')
            dispatch({type: TypedOfProductsActions.FETCH_PRODUCTS_SUCCESS, payload: result.data})
            
        } catch (error) {
            dispatch({type: TypedOfProductsActions.FETCH_PRODUCTS_ERROR, payload: "It was a mistake"})
        }
    }
}