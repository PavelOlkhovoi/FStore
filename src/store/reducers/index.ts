import { combineReducers } from "redux";
import { productsReducer } from "./productsReduser";
import { categoriesReducer } from "./categoriesReducer";

export const rootReducers = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
})