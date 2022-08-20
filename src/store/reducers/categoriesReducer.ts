import { CategoriesState, AllCategories, TypeOfCategories } from "../../types/categories"

const categoriesState: CategoriesState = {
    categories: [],
    loading: false,
    error: null
}

export const categoriesReducer = (state = categoriesState, action: AllCategories) => {
    switch (action.type){
        case TypeOfCategories.FETCH_CATEGORIES:
            return {loading: true, error: null, categories: []}
        case TypeOfCategories.FETCH_CATEGORIES_SUCCESS:
            return {loading: false, error: null, categories: action.payload}
        case TypeOfCategories.FETCH_CATEGORIES_ERROR:
            return {loading: false, error: action.payload, categories: []}
        
        default: 
            return state
    }
}