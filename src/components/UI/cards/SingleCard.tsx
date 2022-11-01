import { Link } from "react-router-dom";
import { Product } from "../../../types/products"
import { firstCapitalLetter } from "../../../utils/reducers/commonFunc";
import AddButon from "../btn/AddButton";
import classes from "../cards/SingleCard.module.css"

interface Props {
    product: Product;
}

const SingleCard: React.FC<Props> = ({product}) => {
    console.log('Single card body functuion body')
    return (
        <div className={classes.card}>
            <img src={product.image} alt={product.title} />
            <div className={classes.cardcontainer}>
                <Link to={`/products/${product.id}`} className="card">
                    <h4 className="card-title"><b>{product.title}</b></h4>
                </Link>
                <p>Category: {firstCapitalLetter(product.category)}</p>
                <AddButon productId={product.id}/>
            </div>
        </div>
    )
}

export default SingleCard