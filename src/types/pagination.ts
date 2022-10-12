
export interface PaginationState {
    step: number;
    items: number;
}

export enum TypeOfPagination {
    CHANGE_STEP = "CHANGE_STEP",
}

export interface ChangeStepAction {
    type: TypeOfPagination.CHANGE_STEP,
    payload: number;
}

export type AllPaginationActions = ChangeStepAction