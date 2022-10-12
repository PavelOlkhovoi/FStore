import { pagination, paginationForUi } from "../utils/reducers/commonFunc"

describe('Basic Pagination', () => {
    const testArray = [1,2,3,4,5,6,7,8,9,10,11]

    test('Main algoritm of paginatopn', () => {
        const res = pagination(testArray, 3, 3)
        const res2 = pagination(testArray, 3, 2)
        const res1 = pagination(testArray, 3, 1)
        const res4 = pagination(testArray, 3, 4)
        expect(res).toEqual([7,8,9])
        expect(res2).toEqual([4,5,6])
        expect(res1).toEqual([1,2,3])
        expect(res4).toEqual([10,11])
    })

    test('Build pagination for Ui', ()=> {
        const uiBtns = paginationForUi(testArray, 3)
        expect(uiBtns).toEqual([1,2,3,4])
    })
})