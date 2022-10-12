import { useState } from "react"
import { useActions } from "../hooks/useAction"
import { useTypedSelector } from "../hooks/useTypedSelect"
import { selectProductsWithPagination } from "../store/selectors"
import AllProducts from "./AllProducts"

const ProductsWithPagination = () => {
    const {changeStepAction} = useActions()
    const {step, items} = useTypedSelector(state => state.pagination)

    // const products = useTypedSelector(state => selectProductsWithPagination(state, items, step ))


    return (
        <>
            <AllProducts/>
            <div onClick={()=> changeStepAction(1)}>1</div>
            <div onClick={()=> changeStepAction(2)}>2</div>
        </>
    )
}

export default ProductsWithPagination