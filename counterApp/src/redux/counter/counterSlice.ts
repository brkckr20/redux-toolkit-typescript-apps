import { createSlice } from '@reduxjs/toolkit';

export interface CounterState{
    value : number
}

const initialState: CounterState = {
    value : 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state : CounterState): void => {
            state.value += 1;
        },
        decrement: (state: CounterState) => {
            state.value -= 1;
        },
        incrementByAmount: (state: CounterState, action) => {
            state.value += action.payload
        }
    }
});

export default counterSlice.reducer;

export const { increment, decrement,incrementByAmount } = counterSlice.actions;