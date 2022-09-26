import { combineReducers } from "redux";
import { productsReducer } from "./productsReduser";
import { categoriesReducer } from "./categoriesReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { loadingReducer } from "./loadingReducer";

export const rootReducers = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    carts: cartReducer,
    user: userReducer,
    loading: loadingReducer
})