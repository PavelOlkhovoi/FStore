import axios from "axios";
import { Dispatch } from "redux";
import { AllUserAction, TypedUserAction, User } from "../../types/user";
import jwt from "jwt-decode"

interface UsernameToken {
    user: string;
    iat: string
}

interface TestString {

}

export const authUser = (username: string, password: string) => {
    return async (dispatch: Dispatch<AllUserAction>) => {
        if(localStorage.getItem("currentUser")){
            const getToken = localStorage.getItem("currentUser") || ""
            const token: UsernameToken = jwt(getToken)

                
            const getAllUsers = await axios.get('https://fakestoreapi.com/users')
            const allUsers: User[] = getAllUsers.data
            const authedUser =  allUsers.filter(u => u.username === token.user)

            dispatch({type: TypedUserAction.USER_LOGIN, user: authedUser[0] , payload: 'authed'})
           
        }else {
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
                
                const currentUser = localStorage.setItem("currentUser", result.data.token);
    
    
                dispatch({type: TypedUserAction.USER_LOGIN, user: authedUser[0] , payload: 'authed'})
                
            } catch (error) {
                console.log('Username pr Password is not correct')
            }
        }
        
    }
}