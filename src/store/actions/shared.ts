import { type } from "os"
import { Dispatch } from "react"
import { fetchAllProducts, fetchUser } from "../../api"
import { AllProductsActions, Product, TypedOfProductsActions } from "../../types/products"
import { AllUserAction, TypedUserAction } from "../../types/user"
import { AllLoadingActions, TypeOfLoadingAction } from "../reducers/loadingReducer"

export const initialData = () => {
    return (dispatch: Dispatch<AllUserAction | AllProductsActions | AllLoadingActions >) => {

        dispatch({type: TypeOfLoadingAction.FETCHING_LOAD})

        return Promise.all([fetchAllProducts(), fetchUser()]).then(([products, user]) => {
            dispatch({type: TypedOfProductsActions.FETCH_PRODUCTS_SUCCESS, payload: products})
            dispatch({type: TypedUserAction.USER_LOGIN, user: user, payload: 'authed'})
            dispatch({type: TypeOfLoadingAction.STOP_LOAD})
        })
    }
}