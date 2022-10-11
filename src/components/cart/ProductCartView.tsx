import { connect, ConnectedProps } from 'react-redux'
import { CartProducts } from '../../types/cart'
import { State } from "../../store";
import {FC, useState} from 'react'
import { useActions } from '../../hooks/useAction';
import Button from '../UI/btn/Button';
import { formatCost } from "../../utils/reducers/commonFunc"
import classes from "./styles/ProductCartView.module.css"

interface Props extends PropsFromRedux {}

const ProductCartView: FC<Props> = ({product, quantity}) => {
    const {deleteProduct, changeQuantity} = useActions()
    return (
        <div className={classes.onecard} data-testid='cart-item'>
            <h3>{product.title}</h3>
            <div className={classes.cartimg}>
                <img src={product.image} alt={product.title} />
            </div>

            <div className={classes.info}>
             <div className={classes.stats}>
                    <div>
                        <b>Price:</b> {formatCost(product.price)}
                    </div>
                    <div data-testid='quantity'>
                        <b>Quantity:</b> {quantity}
                    </div>
                </div>
                <p className={classes.description}>
                    {product.description}
                </p>
                <span className={classes.total}>
                    <b>Total:</b> {formatCost(product.price * quantity)}
                </span>
                <Button 
                    onClick={()=>deleteProduct(product.id)}
                    >
                        Delete product
                </Button>
                <Button 
                    data-testid='cart-add'
                    onClick={()=>changeQuantity(product.id, quantity+1) }
                >
                +
                </Button>
                <Button onClick={()=>changeQuantity(product.id, quantity-1)}>-</Button>
            </div>
        </div>
    )
}

interface ProductIdArr {
    productArr: CartProducts
}


const mapStateToProps = (products: State, detail: ProductIdArr) => {
    const {productId, quantity} = detail.productArr
    const [product] = products.products.products.filter(p => p.id === productId)
    return {
        product,
        quantity
    }
}

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ProductCartView)



