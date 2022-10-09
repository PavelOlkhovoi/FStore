import Skeleton from "../../components/UI/skeleton/Skeleton"
import { useTypedSelector } from "../../hooks/useTypedSelect"
import HistoryOrders from "./HistoryOrders"
import { firstCapitalLetter } from "../../utils/reducers/commonFunc"
import { FC } from "react";


interface Props {
    firstname: string | undefined;
    lastname: string | undefined
}
export const DashboardTitle: FC<Props> = ({firstname, lastname}) => {
    const user = useTypedSelector(state => state.user)
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>{firstCapitalLetter(firstname)} {firstCapitalLetter(lastname)}</h3>
        </div>
    )
}

const UserDashboard = () => {
    const user = useTypedSelector(state => state.user.user)
    return (
        <div>
           <Skeleton>
            <DashboardTitle firstname={user?.name.firstname} lastname={user?.name.lastname} />
            <HistoryOrders id={user?.id} />
           </Skeleton>
        </div>
    )
}


export default UserDashboard