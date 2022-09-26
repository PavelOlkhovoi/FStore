import axios from "axios";
import { Product } from "../types/products";
import { User } from "../types/user";
import jwt from "jwt-decode"


export const fetchAllProducts = async (): Promise<Product[]> => {
   const res = await axios.get('https://fakestoreapi.com/products')
   return res.data
}

interface UsernameToken {
    user: string;
    iat: string
}

type UserLocal = Promise<User> | null


export const fetchUser = () => {
    if(!localStorage.getItem("currentUser")){
        return null
    }

    return fetch('https://fakestoreapi.com/users')
            .then(res => res.json() )
            .then( getAllUsers => {
                const getToken = localStorage.getItem("currentUser") || ""
                const token: UsernameToken = jwt(getToken)
                const allUsers: User[] = getAllUsers
                const authedUser =  allUsers.filter(u => u.username === token.user)
                const testUs = authedUser[0]
                return testUs
            })
} 