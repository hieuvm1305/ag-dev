import { props, createAction } from '@ngrx/store';
import { UserLogin, AuthState, UserInfo } from './user.state';
import { UserLoginResponse } from '../../utils/types/response';
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

export const LoginFailureAction = createAction(
  '[Login Page] LoginFailure',
  props<UserLoginResponse>()
);

export const getUser = createAction('[User] getUser');
export const getUserSuccess = createAction('[User] getUserSuccess', props<{users: UserInfo[]}>());
export const fetchUsersFailure = createAction(
  '[Users] Fetch Users Failure',
  props<{ error: string }>()
);