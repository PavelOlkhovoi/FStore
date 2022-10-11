import React, { FC } from "react"
import ProductCartView from "../components/cart/ProductCartView"
import { useTypedSelector } from "../hooks/useTypedSelect"


const Cart: FC = () => {
    const carts = useTypedSelector(state => state.carts.carts[0] 
        ? state.carts.carts[0].products 
        : []
        )
    return (
        <div className="cart" data-testid="page-cart">
            <h1>The Cart</h1>
            {
                carts.length !== 0 
                ?
                carts.map( c => <ProductCartView productArr={c} key={c.productId}/>)
                :
                'Your cart is empty'
            }
        </div>
    )
}

export default Cart