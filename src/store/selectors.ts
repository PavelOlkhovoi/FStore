import { createSelector } from "reselect";
import { Product } from "../types/products";
import { pagination } from "../utils/reducers/commonFunc";
import { State } from "./index";



export const selectProducts = (state: State) => state.products
export const selectProductsWithPagination = (state: State, item: number, step: number) => {
    const allProducts = selectActiveCategory(state)
    console.log(allProducts.length)
    const testP = pagination(allProducts, item, step)

    return testP
}




export const selectCategory = createSelector([selectProducts, (state, category) => category], (a, cat) => {
    if(cat === ''){
        return a.products
    }
    return a.products.filter( p => p.category === cat)
})




export const selectActiveCategory = (state: State) => {
    const activeCat = state.categories.active
    const product = state.products.products

    const filtredProduct = product.filter(function(n){
        return activeCat.includes(n.category)
    })

    return activeCat.length === 0 ? product : filtredProduct;
}






export const selectSingleProduct = createSelector([selectProducts, (state, productId) => 
productId], ({products}, id) => {
    return products.filter(p => p.id === id)
})





export const selectArrayOfProduct = (state: State, ids: number[]) => {
    const allProducts = selectProducts(state)

    return allProducts.products.filter(p => ids.includes(p.id))

}