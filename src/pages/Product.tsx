import React, {FC} from 'react'
import { selectSingleProduct } from "../store/selectors";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelect";


const Product: FC = () => {
    const { productId } = useParams();
    const id: number = parseInt(productId!)
    const [product] = useTypedSelector(state => selectSingleProduct(state, id))

    
    return (
        <div>
            <h1>{product.title}</h1>
            <div>Category: {product.category}</div>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>Raiting{product.rating.rate}</p>
            <img src={product.image} style={{width: '300px'}}/>
        </div>
    )
}

export default Product
