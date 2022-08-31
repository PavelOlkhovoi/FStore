import React, { FC } from "react"
import ProductCartView from "../components/cart/ProductCartView"
import { useTypedSelector } from "../hooks/useTypedSelect"


const Cart: FC = () => {
    const carts = useTypedSelector(state => state.carts.carts[0].products)
    console.log(carts)
    return (
        <div className="cart">
            Cart
            <hr />
            {
                carts.map( c => <ProductCartView productArr={c} key={c.productId}/>)
            }
        </div>
    )
}

export default Cart