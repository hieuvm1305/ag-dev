import { createReducer, on } from '@ngrx/store';
import {
  login,
  logout,
  loginSuccess,
  LoginFailureAction,
  getUser, getUserSuccess
} from './user.actions';
import { initialAuthState} from './user.state';

export const AuthReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({
    ...state,
    user: null,
    isLoggedIn: false,
  })),

  on(logout, () => initialAuthState),
  on(loginSuccess, (state) => ({ ...state })),
  on(LoginFailureAction, (state) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
    };
  }),    
  
  on(getUser, (state) => ({
    ...state,
    user: null,
    isLoggedIn: false,
    users: []
  })),

  on(getUserSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null,
  })),

);