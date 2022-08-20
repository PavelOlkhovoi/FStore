import { createSelector } from "reselect";
import { State } from "./index";

export const selectProducts = (state: State) => state.products

export const selectTestCategory = createSelector([selectProducts, (state, category) => category], (a, cat) => {
    if(cat === ''){
        return a.products
    }
    return a.products.filter( p => p.category === cat)
})