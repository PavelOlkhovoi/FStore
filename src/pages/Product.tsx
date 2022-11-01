import React, {FC} from 'react'
import { selectSingleProduct } from "../store/selectors";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelect";
import { formatCost } from '../utils/reducers/commonFunc';
import AddButon from '../components/UI/btn/AddButton';


const Product: FC = () => {
    const { productId } = useParams();
    const id: number = parseInt(productId!)
    const [product] = useTypedSelector(state => selectSingleProduct(state, id))

    if(!product){
        return <h1>Loading</h1>
    }
    
    return (
        <div className='product-full'>
            <img src={product.image} style={{width: '40%', margin: "16px auto", display: "block"}}/>
            <h1>{product.title}</h1>
            <div>Category: {product.category}</div>
            <p>{product.description}</p>
            <p>{ formatCost(product.price) }</p>
            <p>Raiting: {product.rating.rate}</p>
        <AddButon productId={id}/>
        </div>
    )
}

export default Product
