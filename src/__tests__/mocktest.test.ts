export const myPow = (value: number) => {
    
    if(value === 1) {
        return 1
    }

    return Math.pow(value, 2)
}

describe('Try to use and understand Mock', ()=> {
    test("Correct value", ()=> {
        const spyMyPow = jest.spyOn(Math, 'pow')
        myPow(2)
        expect(spyMyPow).toBeCalledTimes(1)
    })

    test("Correct value 0", ()=> {
        const spyMyPow = jest.spyOn(Math, 'pow')
        myPow(1)
        expect(spyMyPow).toBeCalledTimes(0)
    })
})