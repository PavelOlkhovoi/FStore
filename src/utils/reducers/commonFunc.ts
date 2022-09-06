
export function myFindIndex<T extends Record<string, any>>(arr: T[], key: string,  param: number): number {
    return arr.findIndex(item => item[key] === param)
}

export function copyNewArray<T>(arr: T[]): T[] {
    return new Array().concat(arr)
}
