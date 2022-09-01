import { connect, ConnectedProps } from 'react-redux'
import { CartProducts } from '../../types/cart'
import { State } from "../../store";
import {FC, useState} from 'react'
import { useActions } from '../../hooks/useAction';

interface Props extends PropsFromRedux {}

const ProductCartView: FC<Props> = ({product, quantity}) => {
    const [amount, setAmount] = useState(0)
    const {deleteProduct, changeQuantity} = useActions()
    return (
        <div className="cart-item">
            <hr />
            <h3>{product.title}</h3>
            <span>Price: {product.price}</span>
            <p>{product.description}</p>
            <p>{quantity}</p>
            <span>Sum {product.price * quantity}</span>
            <button onClick={()=>deleteProduct(product.id)}>Delete</button>
            <button onClick={()=>changeQuantity(product.id, quantity+1)}>Add quantity</button>
            <button onClick={()=>changeQuantity(product.id, quantity-1)}>Add decrease</button>
            <hr />
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



