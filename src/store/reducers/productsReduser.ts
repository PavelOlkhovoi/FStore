

export interface RootState {
    products: any[];
    loading: boolean;
    error: null | string; 
}
const initalState: RootState = {
    products: [],
    loading: false,
    error: null,
}

export enum TypedOfProductsActions {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

export interface FetchProducts {
    type: TypedOfProductsActions.FETCH_PRODUCTS;
}
export interface FetchProductsSuccess {
    type: TypedOfProductsActions.FETCH_PRODUCTS_SUCCESS;
    payload: any[]
}
export interface FetchProductsError {
    type: TypedOfProductsActions.FETCH_PRODUCTS_ERROR;
    payload: string;
}

export type AllProductsActions = FetchProducts | FetchProductsSuccess | FetchProductsError

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