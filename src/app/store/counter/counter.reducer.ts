import { createReducer, on } from '@ngrx/store';
import {
  setCounter,
  decreaseCounter,
  increaseCounter,
} from './counter.actions';
export type CounterState = {
  count: number;
};

export const initialCountState: CounterState = {
  count: 0,
};

export const CounterReducer = createReducer(
  initialCountState,
  on(setCounter, (state, { count }) => ({ ...state, count })),
  on(increaseCounter, state => ({...state, count: state.count + 1})),
  on(decreaseCounter, state => ({...state, count: state.count - 1}))
);
