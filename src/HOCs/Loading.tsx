import React, {FC, useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelect";
import { selectLoading } from "../store/selectors";

interface Props {
    children: React.ReactChild | React.ReactNode;
}

const Loading: FC<Props> = ({children}) => {
    const isLoading = useTypedSelector(state => selectLoading(state))

    if(!isLoading){
        return <h1>Loading</h1>
    }

    return <>{children}</>
}

export default Loading
