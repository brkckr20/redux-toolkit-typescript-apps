import { configureStore } from '@reduxjs/toolkit'; 
import todosSlice from './todos/todosSlice';

export const store = configureStore({
    reducer: {
        todos : todosSlice
    }
})

export type TodoState = ReturnType<typeof store.getState>;