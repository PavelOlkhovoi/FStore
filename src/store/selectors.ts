import { createSelector } from "reselect";
import { State } from "./index";

export const selectProducts = (state: State) => state.products

export const selectCategory = createSelector([selectProducts, (state, category) => category], (a, cat) => {
    if(cat === ''){
        return a.products
    }
    return a.products.filter( p => p.category === cat)
})


export const selectSingleProduct = createSelector([selectProducts, (state, productId) => 
productId], ({products}, id) => {
    return products.filter(p => p.id === id)
})

export const selectArrayOfProduct = (state: State, ids: number[]) => {
    const allProducts = selectProducts(state)

    return allProducts.products.filter(p => ids.includes(p.id))

}