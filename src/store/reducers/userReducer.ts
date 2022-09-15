import { AllUserAction, RootUser, TypedUserAction } from "../../types/user"

const rootUser: RootUser = {
    user: null,
    isAuth: false,
} 

export const userReducer = (state = rootUser, action: AllUserAction) => {
    switch(action.type) {

        case TypedUserAction.USER_LOGIN:
            return {
                ...state,
                user: action.user,
                isAuth: true,
            }
        
        case TypedUserAction.USER_LOGOUT:
            console.log("Reducer", action)
            return {
                ...state,
                user: null,
                isAuth: false,
            }
        
        default: 
            return state
    }
} 