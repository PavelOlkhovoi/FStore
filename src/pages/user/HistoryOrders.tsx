import { useState, useEffect, FC } from "react"
import { CartProducts, ICart } from "../../types/cart"
import OneOrder from "./OneOrder"

interface Props {
    id: number | undefined
}

const HistoryOrders: FC<Props> = (id) => {
    const [carts, setCarts] = useState<ICart[]>([])
    
    useEffect(()=> {
        fetch(`https://fakestoreapi.com/carts/user/${id.id}`)
        .then(res=>res.json())
        .then(json=>setCarts(json))
    }, [])

    console.log(carts)

    return (
        <>
        <h1>History Orders</h1>
            {carts.map( c => <OneOrder order={c} key={c.id}/>)}
        </>
    )
}

export default HistoryOrders