import axios from "axios";
import jwt from "jwt-decode"
import { User } from "../../types/user"

// export const testMy = 'Test';

describe('Test user', ()=> {
    test('Post API request', async()=> {
        const result = await axios.post('https://fakestoreapi.com/auth/login', {
            username: "mor_2314",
            password: "83r5^_"
        })

        interface UsernameToken {
            user: string;
            iat: string
        }

        const username: UsernameToken = jwt(result?.data?.token)
        const getAllUsers = await axios.get('https://fakestoreapi.com/users')
        const allUsers: User[] = getAllUsers.data
        const user = allUsers.filter(u => u.username === username.user)

        expect(user[0].username).toBe('mor_2314')
    })

})