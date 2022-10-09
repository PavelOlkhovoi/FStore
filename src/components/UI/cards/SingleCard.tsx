import React, { FC, useState } from "react"
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useAction";
import { Product } from "../../../types/products"
import { firstCapitalLetter } from "../../../utils/reducers/commonFunc";
import Button from "../btn/Button";
import classes from "../cards/SingleCard.module.css"

interface Props {
    product: Product;
}

const SingleCard: React.FC<Props> = ({product}) => {
    const {addProduct, deleteProduct} = useActions()
    const [btnActive, setBtnActive] = useState(false)
    
    const handleClickAdd = (id: number) => {
        addProduct(id)
        setBtnActive(true)
    }

    const handleClickDelet = (id: number) => {
        deleteProduct(id)
        setBtnActive(false)
    }
    return (
        <div className={classes.card}>
            <img src={product.image} alt={product.title} />
            <div className={classes.cardcontainer}>
                <Link to={`/products/${product.id}`} className="card">
                    <h4 className="card-title"><b>{product.title}</b></h4>
                </Link>
                <p>Category: {firstCapitalLetter(product.category)}</p>
                <Button
                    onClick={()=>handleClickAdd(product.id)}
                    disabled={ btnActive }
                >
                    Add to cart
                </Button>
                <Button
                    onClick={()=>handleClickDelet(product.id)
                }
                >
                    Delete from cart
                </Button>
            </div>
        </div>
  


    )
}

export default SingleCard