import { configureStore } from '@reduxjs/toolkit'; 
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import todosSlice from './todos/todosSlice';

export const store = configureStore({
    reducer: {
        todos : todosSlice
    }
})



/* bir kere tanımlayıp heryerde kullanmak için */
export type TodoState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TodoState> = useSelector;
