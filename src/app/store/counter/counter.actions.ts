import { props, createAction } from '@ngrx/store';
export const setCounter = createAction('[Counter] setCounter', props<{ count: number }>())
export const decreaseCounter  = createAction('[Counter] decreaseCounter')
export const increaseCounter  = createAction('[Counter] increaseCounter')