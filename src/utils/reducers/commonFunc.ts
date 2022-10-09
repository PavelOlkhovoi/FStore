
export function myFindIndex<T extends Record<string, any>>(arr: T[], key: string,  param: number): number {
    return arr.findIndex(item => item[key] === param)
}

export function copyNewArray<T>(arr: T[]): T[] {
    return new Array().concat(arr)
}

export function firstCapitalLetter(string: string | undefined): string | undefined {
    if(string === undefined){
        return string
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatCost = (number: number) => {
   const formated =  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)
   return formated
}

export const formatData = (data: string) => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const formattedDay = new Date(data)

    return formattedDay.toLocaleDateString()
}