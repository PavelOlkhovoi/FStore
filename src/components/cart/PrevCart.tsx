import React, { FC } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelect"
import { Link } from "react-router-dom"

const PrevCart = () => {
    const carts = useTypedSelector(state => state.carts)
    const amount = carts.carts.length !== 0  ? carts.carts[0].products.length : 0
    
    return (
        <Link 
        to='cart' 
        className="cart-prew"
        data-testid="prevcart"
        >
            Cart Preview {amount}
        </Link>
    )
}

export default PrevCart