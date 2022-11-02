import { FC, useState } from "react"
import { useActions } from "../../../hooks/useAction"
import Button from "./Button"
import { useTypedSelector } from "../../../hooks/useTypedSelect";
import { useEffect } from 'react'
import { selectProductsArrInCurrentCart } from "../../../store/selectors";

interface Props {
    productId: number
}

const AddButon: FC<Props> = ({productId}) => {
    const {addProduct, deleteProduct} = useActions()
    const [isInCard, setIsInCard] = useState(false)

    const productsArr = useTypedSelector(state => selectProductsArrInCurrentCart(state)? selectProductsArrInCurrentCart(state) : [])

    useEffect(()=> {
        if(productsArr.includes(productId)){
            setIsInCard(true)
        }
    }, [])

    const addToCartHandler = () => {
        addProduct(productId)
        setIsInCard(true)
    }

    const removeToCartHandler = () => {
        deleteProduct(productId)
        setIsInCard(false)
    }
    return (
        <>
            <Button onClick={addToCartHandler} disabled={isInCard}>
                Add to cart
            </Button>
            <Button onClick={removeToCartHandler}>
                Remove
            </Button>
        </>
    )
}

export default AddButon