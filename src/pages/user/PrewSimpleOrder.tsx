import { useState, useEffect, FC } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelect"
import { selectArrayOfProduct, selectProducts } from "../../store/selectors"
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

    console.log(allProducts)
 
    return (
        <div>
            { order.date }
            <hr />
            {
                allProducts.map( p => <div key={p.id}>
                    <h3>{p.title}</h3>
                    <div>{p.price}$ | quantity: {p.quantity}</div>
                </div>)
            }
        </div>
    )
}

export default PrewSimpleOrder