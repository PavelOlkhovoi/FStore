import { useEffect, useState } from "react"
import Skeleton from "../../components/UI/skeleton/Skeleton"
import { useTypedSelector } from "../../hooks/useTypedSelect"
import HistoryOrders from "./HistoryOrders"


export const TestTitle = () => {
    const user = useTypedSelector(state => state.user)
    return (
        <div>
            <h1>User Dashboard</h1>
            <h3>{user.user?.name.firstname} {user.user?.name.lastname}</h3>
        </div>
    )
}

const UserDashboard = () => {
    const user = useTypedSelector(state => state.user)
    console.log('user id', user.user?.id)
    return (
        <div>
           <Skeleton>
            <TestTitle />
            <HistoryOrders id={user.user?.id} />
           </Skeleton>
        </div>
    )
}


export default UserDashboard