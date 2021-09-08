import { createReducer, on } from '@ngrx/store';

import { DECREMENT_ACTION, INCREMENT_ACTION, RESET_ACTION } from './counter.action';

export interface CounterState {
    counter: number
};
export const initialCounterState: CounterState = {
    counter: 0
};
export const counterReducer = createReducer(
    initialCounterState,
    on(INCREMENT_ACTION, (state: CounterState) => ({counter: state.counter + 1})),
    on(DECREMENT_ACTION, (state: CounterState) => ({counter: state.counter - 1})),
    on(RESET_ACTION, (state: CounterState) => initialCounterState)
);
