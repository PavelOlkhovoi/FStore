import { CategoriesState, AllCategories, TypeOfCategories } from "../../types/categories"

const categoriesState: CategoriesState = {
    categories: [],
    loading: false,
    error: null,
    active: []
}

export const categoriesReducer = (state = categoriesState, action: AllCategories) => {
    switch (action.type){
        case TypeOfCategories.FETCH_CATEGORIES:
            return {...state, loading: true, categories: [], active: []}
        case TypeOfCategories.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: action.payload, active: []}
        case TypeOfCategories.FETCH_CATEGORIES_ERROR:
            return {...state, error: action.payload, categories: [], active: []}
        case TypeOfCategories.ACTIVE_CATEGORIES:
            return {...state, active: [...state.active, action.payload]}
        case TypeOfCategories.TOGGLE_ACTIVE_CATEGORIES:
            return {
                ...state,
                active: state.active.filter( c => c !== action.payload)
            }
        
        default: 
            return state
    }
}