import { selectProducts } from "../store/selectors";
import { AllProductsActions, RootState } from "../types/products";
import { testStore } from "./testUtils/configStore";

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


const testProductReducer = (state = rootStateProductTest, action: AllProductsActions): RootState => {
    switch (action.type) {
        default:
            return state
    }
}
const tStore = testStore(testProductReducer)
const state = tStore.getState()


describe("Testing different selectors", ()=> {
    test('Derive all the products ', ()=> {
        const products = selectProducts(state)
        expect(products.products).toEqual(rootStateProductTest.products)
    })
})