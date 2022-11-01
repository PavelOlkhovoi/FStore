import { createSelector, createSelectorCreator } from "reselect";
import { Product } from "../types/products";
import { pagination, paginationForUi } from "../utils/reducers/commonFunc";
import { State } from "./index";



export const selectProducts = (state: State) => state.products

export const selectProductsWithPagination = (state: State, item: number, step: number) => {
    const allProducts = selectActiveCategory(state)
    const limitedProducts = pagination(allProducts, item, step)

    return limitedProducts
}

export const selectPaginationItems = (state: State) => {
    return state.pagination.items
}

export const selectProductsLength = (state: State) => {
    const allProducts = selectActiveCategory(state)
    const items = selectPaginationItems(state)
    return paginationForUi(allProducts, items)
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


export const selectArrayOfProduct = (state: State, ids: number[]): Product[] => {
    const allProducts = selectProducts(state)

    return allProducts.products.filter(p => ids.includes(p.id))

}

export const selectProductsArrInCurrentCart = (state: State): number[] => {
    if(!state.carts.carts[0]){
        return []
    }else {
        return state.carts.carts[0].products.length !== 0 ? state.carts.carts[0].products.map(i => i.productId) : []
    }

}


export const selectTotalCart = createSelector(
    [
        selectProductsArrInCurrentCart, 
        (state: State) => state.carts.carts[0] ? state.carts.carts[0].products : [],
        (state: State) => state.products ? state.products.products : []
    ], (productsId, productCart, product) => {

        if(productsId.length === 0 ){
            return 0
        }else {
            const productsInsideCart = product.filter(item => productsId.includes(item.id))
       
            const arrayTotals = productsInsideCart.map( p => {
             const productCartObj = productCart.filter( item => item.productId === p.id)
             const quantity = productCartObj[0].quantity
             return p.price * quantity
            })
     
            return arrayTotals ? arrayTotals.reduce((current, next) => current + next) : arrayTotals[0]
        }
      

})

export const selectLoading = (state: State) => state.loading.loading

