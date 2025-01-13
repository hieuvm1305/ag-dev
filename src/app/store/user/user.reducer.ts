import { createReducer, on } from "@ngrx/store";
import { login, logout, loginSuccess } from "./user.actions";
import { initialAuthState } from "./user.state";

export const AuthReducer = createReducer(
    initialAuthState, 
    on(login, (state) => ({
        ...state,
        user: null,
        isLoggedIn: false
    })),

    on(logout, () => initialAuthState),
    on(loginSuccess, state => ({...state}))
)