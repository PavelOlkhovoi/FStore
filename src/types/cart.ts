export interface ICart {
    id: number;
    userId: number | null;
    date: string;
    products: CartProducts[];
    status: string;
}

export interface CartProducts {
    productId: number;
    quantity: number
}

export interface ICartState {
    carts: ICart[]
}

export enum TypeOfCartsAction {
    INITIAL_CARD = "INITIAL_CARD",
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    DELETE_CART = "DELETE_CART",
}

export interface InitialCart {
    type: TypeOfCartsAction.INITIAL_CARD
}

export interface AddProductToCart {
    type: TypeOfCartsAction.ADD_PRODUCT;
    cartId: number;
    productId: number;
    quantity: number
}

export interface DeleteProductFromCart {
    type: TypeOfCartsAction.DELETE_PRODUCT;
    idCart: number;
    idProduct: number;
}

export interface DeleteCart {
    type: TypeOfCartsAction.DELETE_CART;
    payload: number;
}

export type AllCartsActions = InitialCart | AddProductToCart | DeleteProductFromCart | DeleteCart