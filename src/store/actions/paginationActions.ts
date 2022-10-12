import { Dispatch } from "react"
import { AllPaginationActions, TypeOfPagination } from "../../types/pagination"

export const changeStepAction = (step: number) => {
    return (dispatch: Dispatch<AllPaginationActions>) => {
        dispatch({type: TypeOfPagination.CHANGE_STEP, payload: step})
    }
}