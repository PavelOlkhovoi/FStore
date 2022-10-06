import { ButtonHTMLAttributes, FC } from "react"
import classes from "../btn/Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactChild | React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <button className={classes.btn} {...props}>{props.children}</button>
    )
}

export default Button