export type UserLogin = {
    name: string,
    email: string
}

export type AuthState = {
    user: UserLogin | null,
    isLoggedIn: boolean
}

export const initialAuthState : AuthState = {
    user: null,
    isLoggedIn: false
}