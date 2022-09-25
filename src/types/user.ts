export interface RootUser {
    user: User | null;
    isAuth: boolean;
    loading: boolean;
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
    USER_LOGOUT = 'USER_LOGOUT',
    USER_FETCHING = 'USER_FETCHING'
}

export interface LoginUser {
    type: TypedUserAction.USER_LOGIN,
    user: User,
    payload: string,
}

export interface FetchingUser {
    type: TypedUserAction.USER_FETCHING,
}

export interface LogoutUser {
    type: TypedUserAction.USER_LOGOUT,
}

export type AllUserAction = LoginUser | LogoutUser | FetchingUser