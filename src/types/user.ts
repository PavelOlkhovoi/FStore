export interface RootUser {
    user: User | null;
    isAuth: boolean;
    error: null | string;
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
    USER_FETCHING = 'USER_FETCHING',
    USER_FETCHING_ERROR = 'USER_FETCHING_ERROR',
}

export interface LoginUser {
    type: TypedUserAction.USER_LOGIN,
    user: User | null,
    payload: string,
}

export interface FetchingUser {
    type: TypedUserAction.USER_FETCHING,
}

export interface LogoutUser {
    type: TypedUserAction.USER_LOGOUT,
}

export interface LogoutUser {
    type: TypedUserAction.USER_LOGOUT,
}
export interface UserFetchingError {
    type: TypedUserAction.USER_FETCHING_ERROR,
    message: string
}

export type AllUserAction = LoginUser | LogoutUser | FetchingUser | UserFetchingError