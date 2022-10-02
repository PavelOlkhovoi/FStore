export interface CategoriesState {
    categories: string[];
    loading: boolean;
    error: null | string;
    active: string[];
}

export enum TypeOfCategories {
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
    ACTIVE_CATEGORIES = "ACTIVE_CATEGORIES",
    TOGGLE_ACTIVE_CATEGORIES = "TOGGLE_ACTIVE_CATEGORIES"
}

export interface FetchCategoriesAction {
    type: TypeOfCategories.FETCH_CATEGORIES;
}
export interface FetchCategoriesActionSuccess {
    type: TypeOfCategories.FETCH_CATEGORIES_SUCCESS;
    payload: string[];
}
export interface FetchCategoriesActionError {
    type: TypeOfCategories.FETCH_CATEGORIES_ERROR;
    payload: string;
}
export interface SetActiveCategoryAction {
    type: TypeOfCategories.ACTIVE_CATEGORIES;
    payload: string;
}

export interface ToggleActiveCategoryAction {
    type: TypeOfCategories.TOGGLE_ACTIVE_CATEGORIES;
    payload: string;
}

export type AllCategories = FetchCategoriesAction | FetchCategoriesActionSuccess 
| FetchCategoriesActionError | SetActiveCategoryAction | ToggleActiveCategoryAction