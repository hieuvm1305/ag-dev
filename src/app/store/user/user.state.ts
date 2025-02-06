export type UserLogin = {
    name: string,
    email: string
}

export type AuthState = {
    user: UserLogin | null,
    isLoggedIn: boolean,
    users: UserInfo[]
}

export const initialAuthState : AuthState = {
    user: null,
    isLoggedIn: false,
    users: []
}

export type UserInfo = {
    name: string,
    email: string,
    id: string
}
