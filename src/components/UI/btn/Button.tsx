import { ButtonHTMLAttributes, FC } from "react"
import classes from "../btn/Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactChild | React.ReactNode;
    width?: string;
}

const Button: FC<ButtonProps> = ({ children, width = 'auto', ...props}) => {
    return (
        <button
            style={{width: width}}
            className={classes.btn} 
            {...props}
            >
                {children}

            </button>
    )
}

export default Button