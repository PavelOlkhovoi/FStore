import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from '../../pages/Cart'
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { testStore } from '../testUtils/configStore'
import { AllCartsActions, ICartState, TypeOfCartsAction } from "../../types/cart";
import { AllProductsActions, RootState } from "../../types/products";
import Home from '../../pages/Home'
import {MemoryRouter} from "react-router-dom";
import App from "../../App";
import { renderWithRouter } from "../testUtils/withRoutes";

const rootStateCartTest: ICartState = {
    carts: [{
        id: 5,
        userId: 1,
        date: '2022-08-10',
        status: 'current',
        products:[{productId: 1, quantity: 1}]
    }]
}

const testCartReducer = (state = rootStateCartTest, action: AllCartsActions): ICartState => {
    switch (action.type) {
        case TypeOfCartsAction.CHANGE_QUANTITY:
            const indexCartToUpdate = state.carts.findIndex(c => c.id === action.cartId)
            const copyStateToUpdate = [...state.carts]
            const targetProduct = copyStateToUpdate[0].products.filter(item => item.productId === action.productId)
            targetProduct[0].quantity = action.quantity
            return {
                ...state,
                carts: copyStateToUpdate
            }
        default:
            return state
    }
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

const testProductReducer = (state = rootStateProductTest, action: AllProductsActions): RootState => {
    switch (action.type) {
        default:
            return state
    }
}






const fakeStoreWithProduc = testStore(testProductReducer, undefined, testCartReducer)

describe('Test dom elements on the cary', ()=> {
    test('Render the empty cart page', () => {
        render(<Provider store={testStore()}>
            <Cart />
        </Provider>)
        const myDiv = screen.getByText(/Your cart is empty/i)
        expect(myDiv).toBeInTheDocument()
    })
    test('Render the cart page with products', () => {
        render(<Provider store={fakeStoreWithProduc}>
            <Cart />
        </Provider>)
        const cartItem = screen.getByTestId('cart-item')
        expect(screen.queryByText(/Your cart is empty/i)).toBeNull()
        expect(cartItem).toBeInTheDocument()
        const prQuantity = screen.getAllByTestId('quantity')
        const addBtn = screen.getAllByTestId('cart-add')
        userEvent.click(addBtn[0])
        expect(prQuantity[0].textContent).toBe('2')
    })

    test('Change routs', ()=> {
        renderWithRouter(<App />)
        const prevcart = screen.getByTestId('prevcart')
        userEvent.click(prevcart)
        expect(screen.getByTestId('page-cart')).toBeInTheDocument()
    })
})