import React, { FC } from "react"
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useAction";
import { Product } from "../../../types/products"
import { firstCapitalLetter } from "../../../utils/reducers/commonFunc";
import classes from "../cards/SingleCard.module.css"

interface Props {
    product: Product;
}

const SingleCard: React.FC<Props> = ({product}) => {
    const {addProduct, deleteProduct} = useActions()
    return (
        <div className={classes.card}>
            <img src={product.image} alt={product.title} />
            <div className={classes.cardcontainer}>
                <Link to={`/products/${product.id}`} className="card">
                    <h4 className="card-title"><b>{product.title}</b></h4>
                </Link>
                <p>Category: {firstCapitalLetter(product.category)}</p>
                <button onClick={()=>addProduct(product.id)}>Add to cart</button>
                <button onClick={()=>deleteProduct(product.id)}>Delete to cart</button>
            </div>
        </div>
  


    )
}

export default SingleCard