import { RootState, AllProductsActions, TypedOfProductsActions } from "../../types/products"

const initalState: RootState = {
    products: [],
    loading: false,
    error: null,
}

export const productsReducer = (state = initalState, action: AllProductsActions): RootState => {
    switch(action.type){
        case TypedOfProductsActions.FETCH_PRODUCTS:
            return {products: [], error: null, loading: true}
        case TypedOfProductsActions.FETCH_PRODUCTS_SUCCESS:
            return {products: action.payload, error: null, loading: false}
        case TypedOfProductsActions.FETCH_PRODUCTS_ERROR:
            return {products: [], error: action.payload, loading: true}

        default: 
            return state
    }
}