import { combineReducers } from "redux";
import { productsReducer } from "./productsReduser";
import { categoriesReducer } from "./categoriesReducer";
import { cartReducer } from "./cartReducer";

export const rootReducers = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    carts: cartReducer,
})