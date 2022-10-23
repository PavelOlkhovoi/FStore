import React, { ReactComponentElement, FC } from "react"
import { useTypedSelector } from "../hooks/useTypedSelect";

interface Props {
    children: React.ReactChild | React.ReactNode;
}

const Loading: FC<Props> = ({children}) => {
    const isLoading = useTypedSelector(state => state.loading.loading)

    if(!isLoading){
        return <h1>Loading</h1>
    }else {
        return <>{children}</>
    }
}

export default Loading
