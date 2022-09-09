export interface RootUser {
    user: User | null;
    isAuth: boolean;
}

export interface User {
    id: number;
        email:string;
        username: string;
        password: string;
        name:{
            firstname: string;
            lastname: string;
        },
        address:{
            city: string;
            street: string;
            number: number;
            zipcode: string;
            geolocation:{
                lat: string;
                long: string;
            }
        },
        phone: string;
}

export enum TypedUserAction {
    USER_LOGIN = 'USER_LOGIN',
}

export interface LoginUser {
    type: TypedUserAction.USER_LOGIN,
    user: User,
    payload: string,
}

export type AllUserAction = LoginUser