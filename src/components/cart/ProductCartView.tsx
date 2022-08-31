import { connect, ConnectedProps } from 'react-redux'
import { CartProducts } from '../../types/cart'
import { State } from "../../store";
import {FC} from 'react'
import { useActions } from '../../hooks/useAction';

interface Props extends PropsFromRedux {}

const ProductCartView: FC<Props> = ({product, quantity}) => {
    const {deleteProduct} = useActions()
    return (
        <div className="cart-item">
            <hr />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{quantity}</p>
            <button onClick={()=>deleteProduct(product.id)}>Delete</button>
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



