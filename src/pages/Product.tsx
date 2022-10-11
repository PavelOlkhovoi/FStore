import React, {FC} from 'react'
import { selectSingleProduct } from "../store/selectors";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelect";
import { formatCost } from '../utils/reducers/commonFunc';


const Product: FC = () => {
    const { productId } = useParams();
    const id: number = parseInt(productId!)
    const [product] = useTypedSelector(state => selectSingleProduct(state, id))

    
    return (
        <div className='product-full'>
            <h1>{product.title}</h1>
            <div>Category: {product.category}</div>
            <p>{product.description}</p>
            <p>{ formatCost(product.price) }</p>
            <p>Raiting: {product.rating.rate}</p>
            <img src={product.image} style={{width: '300px', margin: "0 auto", display: "block"}}/>
        </div>
    )
}

export default Product
