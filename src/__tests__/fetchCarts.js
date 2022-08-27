import axios from "axios";

jest.mock('axios')

export const fetchCart = async () => {
    const result = await axios.get('https://fakestoreapi.com/carts')

    try {
        return result.data
    } catch (error) {
        return 'Error'
    }
}

describe("Fetch data from fakestoreapi", ()=> {
    let response;
    beforeEach( ()=> {
        response = {
            data: [
                {
                    id:1,
                    userId:1,
                    date:2020-10-10,
                    products:[{productId:2,quantity:4},{productId:1,quantity:10},{productId:5,quantity:2}]
                },
                {
                    id:20,
                    userId:10,
                    date:2019-10-10,
                    products:[{productId:1,quantity:5},{productId:5,quantity:1}]
                }
            ]
        }
    })

    test("Test", async()=> {
        axios.get.mockReturnValue(response)
        const data = await fetchCart()
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toEqual([
            {
                id:1,
                userId:1,
                date:2020-10-10,
                products:[{productId:2,quantity:4},{productId:1,quantity:10},{productId:5,quantity:2}]
            },
            {
                id:20,
                userId:10,
                date:2019-10-10,
                products:[{productId:1,quantity:5},{productId:5,quantity:1}]
            }
        ])
    })
})