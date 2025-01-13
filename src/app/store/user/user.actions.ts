import { props, createAction } from '@ngrx/store';
import { UserLogin, AuthState } from './user.state';
export const login = createAction('[Auth] Login', props<UserLogin>());

export const logout = createAction('[Auth] Logout');

export const loginSuccess = createAction(
  '[Auth] loginSuccess',
  props<AuthState>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>() // Handle API error
);
