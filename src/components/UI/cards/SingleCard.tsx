import React, { FC } from "react"
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useAction";
import { Product } from "../../../types/products"

interface Props {
    product: Product;
}

const SingleCard: React.FC<Props> = ({product}) => {
    const {addProduct, deleteProduct} = useActions()
    return (
        <>
            <hr />
            <span>{product.id}</span>
            <Link to={`/products/${product.id}`} className="card">
            <span className="card-title">{product.title}</span>
            </Link>
            <button onClick={()=>addProduct(product.id)}>Add to cart</button>
            <button onClick={()=>deleteProduct(product.id)}>Delete to cart</button>
        </>
    )
}

export default SingleCard