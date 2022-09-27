import { AllUserAction, RootUser, TypedUserAction } from "../../types/user"

const rootUser: RootUser = {
    user: null,
    isAuth: false,
    error: null,
} 

export const userReducer = (state = rootUser, action: AllUserAction) => {
    switch(action.type) {

        case TypedUserAction.USER_FETCHING:
            return {
                ...state,
                loading: true,
            }
        

        case TypedUserAction.USER_LOGIN:
            return {
                ...state,
                user: action.user,
                isAuth: true,
                error: null
            }
        
        case TypedUserAction.USER_LOGOUT:
            return {
                ...state,
                user: null,
                isAuth: false,
            }

        case TypedUserAction.USER_FETCHING_ERROR:
            return {
                ...state,
                user: null,
                isAuth: false,
                error: action.message
            }
        
        default: 
            return state
    }
} 