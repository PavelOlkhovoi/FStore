import { useParams } from "react-router-dom"

const SimpleOrder = () => {
    const {orderId} = useParams();
    console.log(orderId)
    return (
        <h1>Simple order {orderId}</h1>
    )
}

export default SimpleOrder