import { ICartState, AllCartsActions, TypeOfCartsAction } from "../../types/cart";

const cartState: ICartState = {
    carts: []
}


let yourDate = new Date()

export const cartReducer = (state = cartState, action: AllCartsActions): ICartState => {
    switch(action.type){

        case TypeOfCartsAction.INITIAL_CARD:
            return {...state, 
            
                carts: [ 
                {
                     id: 1, userId: null, date: yourDate.toISOString().split('T')[0], products: [], status: "current"
                }
                ]}

        case TypeOfCartsAction.ADD_PRODUCT:
            const indexCart = state.carts.findIndex(c => c.id === action.cartId)
            const copyStateArray = [...state.carts]

            const copyCart = [...copyStateArray]
            const res = copyCart[indexCart].products.filter( item => item.productId === action.productId)

            if (res.length === 0) {
                copyStateArray[indexCart].products.push({productId: action.productId, quantity: action.quantity})
            }

            return {
                ...state,
                carts: copyStateArray
            }

        case TypeOfCartsAction.DELETE_PRODUCT:
            const index = state.carts.findIndex(c => c.id === action.idCart)
            return {
                ...state,
                carts: [{...state.carts[index], products: state.carts[0].products.filter(p => p.productId !== action.idProduct)}]
            }

        case TypeOfCartsAction.DELETE_CART:
            return {
                ...state,
                carts: state.carts.filter(c => c.id !== action.payload)
            }


            
        default:
            return state
    }
}

