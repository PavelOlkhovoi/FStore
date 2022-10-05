import React, {FC, ReactElement} from "react"
import classes from "./Skeleton.module.css"


interface Props {
    children: React.ReactChild | React.ReactNode;
}

const Skeleton: FC<Props> = ({children}) => {
    const [menu, sidebar, content] = React.Children.toArray(children)

    return (
        <div className={classes.maingrid}>
            <div className={classes.menu}>{menu}</div>
            <div className={classes.filter}>{sidebar}</div>
            <div className={classes.content}>{content}</div> 
        </div>
    )
}

export default Skeleton