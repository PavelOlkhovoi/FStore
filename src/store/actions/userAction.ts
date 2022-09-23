import axios from "axios";
import { Dispatch } from "redux";
import { AllUserAction, TypedUserAction, User } from "../../types/user";
import jwt from "jwt-decode"
import { CallBack } from "../../pages/user/Login";

interface UsernameToken {
    user: string;
    iat: string
}

export const authhWithLocalhost = () => {
    console.log('Local host')
    return async (dispatch: Dispatch<AllUserAction>) => {
        if(localStorage.getItem("currentUser")){
            console.log('LocalStorage')
            const getToken = localStorage.getItem("currentUser") || ""
            const token: UsernameToken = jwt(getToken)
    
            const getAllUsers = await axios.get('https://fakestoreapi.com/users')
            console.log('Debag With local host', getAllUsers)
            const allUsers: User[] = getAllUsers.data
            const authedUser =  allUsers.filter(u => u.username === token.user)
    
            dispatch({type: TypedUserAction.USER_LOGIN, user: authedUser[0] , payload: 'authed'})
        }
    }
       
}

export const authUser = (username: string, password: string, cb: CallBack) => {
    return async (dispatch: Dispatch<AllUserAction>) => {
        console.log('server')
        try {
            const result = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password,
            })
            const token: UsernameToken = jwt(result.data.token)
            const userNickName = token.user

            const getAllUsers = await axios.get('https://fakestoreapi.com/users')
            const allUsers: User[] = getAllUsers.data
            const authedUser =  allUsers.filter(u => u.username === userNickName)

            dispatch({type: TypedUserAction.USER_LOGIN, user: authedUser[0] , payload: 'authed'})

            const currentUser = localStorage.setItem("currentUser", result.data.token);

            cb()
            
        } catch (error) {
            console.log('Username pr Password is not correct')
        }
    }
}


export const logoutUser = () => {
    console.log('Logout')
    return async (dispatch: Dispatch<AllUserAction>) => {
        dispatch({type: TypedUserAction.USER_LOGOUT})
    }
       
}