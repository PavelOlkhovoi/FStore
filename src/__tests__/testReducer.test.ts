import { cartReducer } from "../store/reducers/cartReducer";
import { TypeOfCartsAction } from "../types/cart";

const myState = {
    carts: [{
        id: 5,
        userId: 1,
        date: '2022-08-10',
        status: 'current',
        products:[{productId: 1, quantity: 1}]
    }]
}


describe('Test all the reducers', () => {
    test('test', ()=> {
        const red = cartReducer(myState, {type: TypeOfCartsAction.ADD_PRODUCT, cartId: 5, productId: 2, quantity: 1})
        expect(red.carts[0].products[1].productId).toBe(2)
    })
})