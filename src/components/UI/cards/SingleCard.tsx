import React, { FC } from "react"
import { Link } from "react-router-dom";
import { Product } from "../../../types/products"

interface Props {
    product: Product;
}

const SingleCard: React.FC<Props> = ({product}) => {
    return (
        <>
            <hr />
            <Link to={`/products/${product.id}`} className="card">
            <span className="card-title">{product.title}</span>
            </Link>
        </>
    )
}

export default SingleCard