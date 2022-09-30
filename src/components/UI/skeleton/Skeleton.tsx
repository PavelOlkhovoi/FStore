import React, {FC, ReactElement} from "react"
import classes from "./Skeleton.module.css"


interface Props {
    children: React.ReactChild | React.ReactNode;
}

const Skeleton: FC<Props> = ({children}) => {
    const [menu, sidebar, content] = React.Children.toArray(children)

    return (
        <div className={classes.maingrid}>
            <div>{menu}</div>
            <div>{sidebar}</div>
            <div>{content}</div> 
        </div>
    )
}

export default Skeleton