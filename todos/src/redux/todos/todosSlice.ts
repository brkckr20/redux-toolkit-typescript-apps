import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo{
    id: string,
    title: string,
    completed?: boolean,
}


const initialState: Todo[] = []

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state,action : PayloadAction<Todo>) => {
            state.push(action.payload);
        },
        toogle: (state, action: PayloadAction<string>) => {
            return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
        },
        destroy: (state, action : PayloadAction<Todo["id"]>) => {
            const id = action.payload;
            const filtered = state.filter(item => item.id !== id);         
            return state = filtered;            
        }
    }

})

export default todosSlice.reducer;
export const { addTodo, toogle, destroy } = todosSlice.actions;