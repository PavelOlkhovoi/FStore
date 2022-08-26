import React, { FC } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelect"

const PrevCart = () => {
    const carts = useTypedSelector(state => state.carts)
    const amount = carts.carts.length !== 0  ? carts.carts[0].products.length : 0
    console.log(carts)
    
    return (
        <div className="cart-prew">Cart Preview {amount}</div>
    )
}

export default PrevCart