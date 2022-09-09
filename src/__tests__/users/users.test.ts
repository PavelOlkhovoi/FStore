import axios from "axios";
export const testMy = 'Test';

describe('Test user', ()=> {
    test('Post API request', async()=> {
        const result = await axios.post('https://fakestoreapi.com/auth/login', {
            username: "mor_2314",
            password: "83r5^_"
        })
        console.log(result?.data?.token)
        
        expect(result?.data?.token).not.toBeNaN()
    })
})