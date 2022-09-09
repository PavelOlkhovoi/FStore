import axios from "axios";
import { Dispatch } from "redux";
import { AllUserAction } from "../../types/user";

export const authUser = (username: string, password: string) => {
    return async (dispatch: Dispatch<AllUserAction>) => {
        try {
            const result = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password,
            })
            
        } catch (error) {
            
        }
    }
}