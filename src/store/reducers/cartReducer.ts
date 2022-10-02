import { ICartState, AllCartsActions, TypeOfCartsAction } from "../../types/cart";
import { myFindIndex } from "../../utils/reducers/commonFunc";

const cartState: ICartState = {
    carts: []
}


let yourDate = new Date()

export const cartReducer = (state = cartState, action: AllCartsActions): ICartState => {
    const copyStateArray = [...state.carts]
    switch(action.type){
        case TypeOfCartsAction.INITIAL_CARD:
            return {...state, 
            
                carts: [ 
                {
                     id: 1, userId: null, date: yourDate.toISOString().split('T')[0], products: [], status: "current"
                }
                ]}

        case TypeOfCartsAction.ADD_PRODUCT:
            const indexCart = myFindIndex(copyStateArray, 'id', action.cartId)

            // Check if productId has already been added 
            const ifUnique = copyStateArray[indexCart].products.filter( item => item.productId === action.productId)

            if (ifUnique.length === 0) {
                copyStateArray[indexCart].products.push({productId: action.productId, quantity: action.quantity})
            }

            return {
                ...state,
                carts: copyStateArray
            }

        case TypeOfCartsAction.CHANGE_QUANTITY:

            if(action.quantity < 1) { return state }
            else {

                const indexCartToUpdate = state.carts.findIndex(c => c.id === action.cartId)
               
                copyStateArray[indexCartToUpdate].products
                .filter(item => item.productId === action.productId)
                .map(p => p.quantity = action.quantity)
    
                return {
                    ...state,
                    carts: copyStateArray
                }
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

