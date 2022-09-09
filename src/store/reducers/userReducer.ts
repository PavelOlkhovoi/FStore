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
                isAuthed: true,
            }
        
        default: 
            return state
    }
} 