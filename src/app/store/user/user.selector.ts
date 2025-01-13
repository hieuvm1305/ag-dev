import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./user.state";

export const selectAuthState = createFeatureSelector<AuthState>('auth')
export const selectUser = createSelector(selectAuthState, state => state)
