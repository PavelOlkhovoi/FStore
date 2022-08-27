import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { store } from "../../store";
import { cartReducer } from "../../store/reducers/cartReducer";
import { categoriesReducer } from "../../store/reducers/categoriesReducer";
import { productsReducer } from "../../store/reducers/productsReduser";

// This function creates a  new instance the Store. 
// Pass empty reducers which have to contain default data necessary for testing 
export const testStore = (
    products = productsReducer, 
    categories = categoriesReducer,
    carts = cartReducer
    ) => {
    return createStore(combineReducers({
        products: products,
        categories: categories,
        carts: carts,
    }), applyMiddleware(thunk))
}

describe("Test store have to create new instance of the origin store and doesn't change original store", ()=> {
    test('Create without mistakes default store', ()=> {
        const copyStore = testStore()
        const newState = copyStore.getState()
        expect(newState.products.products.length).toBe(0)
    })

    test('The new store has the same structure as original', ()=> {
        const originStore = store;
        const copyStore = testStore()
        const newStage = copyStore.getState()
        const originalStage = store.getState()
        expect(newStage).toEqual(originalStage)
    })
    test('The New store is not original one', ()=> {
        const originStore = store;
        const copyStore = testStore()
        expect(originStore).not.toBe(copyStore)
    })
})