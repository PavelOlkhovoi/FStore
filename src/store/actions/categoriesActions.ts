import axios from "axios"
import { Dispatch } from "redux"
import { AllCategories, TypeOfCategories } from "../../types/categories"

export const categoriesActions = () => {
    return async (dispatch: Dispatch<AllCategories>) => {
        const result = await axios.get('https://fakestoreapi.com/products/categories')

        try {
            dispatch({type: TypeOfCategories.FETCH_CATEGORIES})
            dispatch({type: TypeOfCategories.FETCH_CATEGORIES_SUCCESS, payload: result.data})
        } catch (error) {
            dispatch({type: TypeOfCategories.FETCH_CATEGORIES_ERROR, payload: "Categories has not been loaded"})
        }
    }
}