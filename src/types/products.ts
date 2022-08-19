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

export interface RootState {
    products: any[];
    loading: boolean;
    error: null | string; 
}

export type AllProductsActions = FetchProducts | FetchProductsSuccess | FetchProductsError