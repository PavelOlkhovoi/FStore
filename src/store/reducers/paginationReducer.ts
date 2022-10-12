import { AllPaginationActions, PaginationState, TypeOfPagination } from "../../types/pagination";

export const paginationState: PaginationState = {
    step: 1,
    items: 6,
}

export const paginationReducer = (state = paginationState, action: AllPaginationActions) => {
    switch(action.type) {
        case TypeOfPagination.CHANGE_STEP: 
            return {
                ...state,
                step: action.payload
            }
        default:
            return state
    }

}