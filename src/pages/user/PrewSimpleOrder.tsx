import { useState, useEffect, FC } from "react"
import { Link } from "react-router-dom"
import { useTypedSelector } from "../../hooks/useTypedSelect"
import { selectProducts } from "../../store/selectors"
import { CartProducts, ICart } from "../../types/cart"

interface Props {
    order: ICart
}

const PrewSimpleOrder: FC<Props> = ({ order }) => {
    const { products } = useTypedSelector(state => selectProducts(state))
    const orderedProducts = order.products

    const allProducts = products.filter(item => {
        const { id } = item

        const productId = orderedProducts.map( p => p.productId)
        return productId.includes(id)
    })

    const productsWithQuantity = orderedProducts.forEach( p => {
        const targetProduct = allProducts.findIndex( item => item.id === p.productId)
        const singleProduct = allProducts[targetProduct];

        singleProduct.quantity = p.quantity
    })
 
    return (
        <div>
            { order.date }
            <hr />
            {
                allProducts.map( p => <Link to={`/order/${p.id}`} key={p.id}>
                    <h3>{p.title}</h3>
                    <div>{p.price}$ | quantity: {p.quantity}</div>
                </Link>)
            }
        </div>
    )
}

export default PrewSimpleOrder