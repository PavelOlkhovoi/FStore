import { combineReducers } from "redux";
import { productsReducer } from "./productsReduser";

export const rootReducers = combineReducers({
    products: productsReducer
})