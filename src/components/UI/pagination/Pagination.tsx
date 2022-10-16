import classes from "../pagination/Pagination.module.css"
import { useActions } from "../../../hooks/useAction"
import { useTypedSelector } from "../../../hooks/useTypedSelect"
import { selectProductsLength } from "../../../store/selectors"

const Pagination = () => {
    const {step} = useTypedSelector(state => state.pagination)
    const {changeStepAction} = useActions()
    const length = useTypedSelector(state => selectProductsLength(state))
    
    const rootClasses = [classes.item, classes.active ]

    return (
        <div className={classes.pagination}>
            {
                length.map( n => <div
                    className={ n === step ? rootClasses.join(' ') : classes.item}
                    key={n}
                    onClick={()=> changeStepAction(n)}
                    >{n}</div>
                )
            }
        </div>
    )
}

export default Pagination