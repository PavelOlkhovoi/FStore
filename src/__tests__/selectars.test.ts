import { selectProducts } from "../store/selectors";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsReducer } from "../store/reducers/productsReduser";
import { Product, RootState } from "../types/products";
import thunk from "redux-thunk";
import { State } from "../store";
import { categoriesReducer } from "../store/reducers/categoriesReducer";
import { cartReducer } from "../store/reducers/cartReducer";

export interface TProductState {
    products: Product[]
}


const rootStateProductTest: RootState = {
    products: [
        {
            id: 1,
            title:'Test P 1',
            price: 200,
            category:'Test',
            description:'Test',
            rating: {
                rate: 23,
                count: 4
            },
            image: 'ccccccccccc',
        },
        {
            id: 2,
            title:'Test P 1',
            price: 200,
            category:'Test',
            description:'Test',
            rating: {
                rate: 23,
                count: 4
            },
            image: 'cccccccc',
        }
    ],
    loading: false,
    error: null,
}


interface TAction {
    type: "GET_PRODUCT",
}

const testProductReducer = (state = rootStateProductTest, action: TAction): RootState => {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(combineReducers({
    products: testProductReducer,
    categories: categoriesReducer,
    carts: cartReducer,
}), applyMiddleware(thunk))

const state = store.getState()

console.log(state)

describe("Testing different selectors", ()=> {
    test('Derive all the products ', ()=> {
        const products = selectProducts(state)
        expect(products.products).toEqual(rootStateProductTest.products)
    })
})