
export function myFindIndex<T extends Record<string, any>>(arr: T[], key: string,  param: number): number {
    return arr.findIndex(item => item[key] === param)
}

export function copyNewArray<T>(arr: T[]): T[] {
    return new Array().concat(arr)
}

export function firstCapitalLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}