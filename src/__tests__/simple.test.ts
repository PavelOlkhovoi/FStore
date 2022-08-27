export const validateNumber = (value: number) => {
    if(value > 0 && value <= 100){
        return true
    }

    return false
}

describe("A number is greater than 0 and less than 100", () => {

    test('The number is greater than zero', ()=> {
        expect(validateNumber(50)).toBe(true)
    })

    test('Boundary value zero', ()=> {
        expect(validateNumber(0)).toBe(false)
    })

    test('Boundary value 100', ()=> {
        expect(validateNumber(100)).toBe(true)
    })
    
})