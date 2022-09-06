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


describe('Test cart reducer', () => {
    test('Add new product to cart', ()=> {
        const red = cartReducer(myState, {type: TypeOfCartsAction.ADD_PRODUCT, cartId: 5, productId: 4, quantity: 1})
        expect(red.carts[0].products[1].productId).toBe(4)
    })
    test('Update the quantity of a specific product', ()=> {
        const red = cartReducer(myState, {type: TypeOfCartsAction.CHANGE_QUANTITY, cartId: 5, productId: 1, quantity: 2})
        expect(red.carts[0].products[0].quantity).toBe(2)
    })
})