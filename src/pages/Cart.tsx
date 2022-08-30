import React, { FC } from "react"

export interface Props {
    test: string
}

const Cart: FC<Props> = ({test}) => {
    return (
        <div className="cart">Cart</div>
    )
}

export default Cart