import React, { FC } from "react"
import classes from "./Skeleton.module.css"


interface Props {
    children: React.ReactChild | React.ReactNode;
}

const Skeleton: FC<Props> = ({children}) => {
    const [sidebar, content, footer] = React.Children.toArray(children)

    return (
        <div className={classes.maingrid}>
            <div className={classes.filter}>{sidebar}</div>
            <div className={classes.content}>{content}</div> 
            <footer className={classes.footer}>{footer}</footer> 
        </div>
    )
}

export default Skeleton