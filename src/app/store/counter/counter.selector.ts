import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducer";
export const selectCounterState = createFeatureSelector<CounterState>('counter')
export const selectCounter = createSelector(selectCounterState, (state: CounterState) => state.count)