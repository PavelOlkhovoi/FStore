import { useEffect, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelect"
import HistoryOrders from "./HistoryOrders"

const UserDashboard = () => {
    const user = useTypedSelector(state => state.user)

    return (
        <div>
            <h1>User Dashboard</h1>
            <h3>{user.user?.name.firstname} {user.user?.name.lastname}</h3>
            <h2>Order history</h2>
            <HistoryOrders id={user.user?.id} />
        </div>
    )
}


export default UserDashboard