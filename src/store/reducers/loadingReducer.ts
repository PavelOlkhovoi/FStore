
export const loadingState: LoadingState = {
    loading: false
}

export interface LoadingState {
    loading: boolean
}

export enum TypeOfLoadingAction {
    FETCHING_LOAD = "FETCHING_LOAD",
    STOP_LOAD = "STOP_LOAD"
}

export interface Fetching {
    type: TypeOfLoadingAction.FETCHING_LOAD
}

export interface StopFetching {
    type: TypeOfLoadingAction.STOP_LOAD
}

export type AllLoadingActions = Fetching | StopFetching

export const loadingReducer = (state = loadingState, action: AllLoadingActions) => {
    switch(action.type) {
        case TypeOfLoadingAction.FETCHING_LOAD: 
            return { loading: true }

        case TypeOfLoadingAction.STOP_LOAD: 
            return { loading: false}
        default:
            return state
    }

}