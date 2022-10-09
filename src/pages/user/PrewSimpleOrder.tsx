import { FC } from "react"
import { Link } from "react-router-dom"
import { useTypedSelector } from "../../hooks/useTypedSelect"
import { selectProducts } from "../../store/selectors"
import {  ICart } from "../../types/cart"
import { formatCost, formatData } from "../../utils/reducers/commonFunc"
import classes from "./styles/Login.module.css"

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
            { formatData(order.date) }
            <hr />
            {
                allProducts.map( p => <Link 
                    to={`/order/${p.id}`} 
                    key={p.id}
                    className={classes.orderwrap}
                    >
                    <h3>{p.title}</h3>
                    <p className={classes.detail}>Sum: {formatCost(p.price)}</p>
                    <p className={classes.detail}>Quantity: {p.quantity}</p>
                </Link>)
            }
        </div>
    )
}

export default PrewSimpleOrder