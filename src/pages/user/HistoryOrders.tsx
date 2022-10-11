import { useState, useEffect, FC } from "react"
import { CartProducts, ICart } from "../../types/cart"
import PrewSimpleOrder from "./PrewSimpleOrder"
import classes from "./styles/HistoryOrders.module.css"


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

    return (
        <div>
        <h1>History Orders</h1>
            {carts.map( c => <PrewSimpleOrder order={c} key={c.id}/>)}
        </div>
    )
}

export default HistoryOrders