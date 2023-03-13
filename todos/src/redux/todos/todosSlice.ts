import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo{
    id: string,
    title: string,
    completed?: boolean,
}


const initialState = {
    todos: [
        {
            id: "lorem",
            title: "sabit",
            completed : true
        }
    ] as Todo[],
    activeFilter: "All",
    
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state,action : PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        // toogle: (state, action: PayloadAction<string>) => {
        //     return state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
        // },
        toogle: (state, action: PayloadAction<Todo["id"]>) => {
            console.log("toogledayız");  
            return state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);         
        },
        // destroy: (state, action : PayloadAction<Todo["id"]>) => {
        //     const id = action.payload;
        //     const filtered = state.todos.filter(item => item.id !== id);         
        //     return state.todos = filtered;            
        // }
        changeActive: (state, action: PayloadAction<string>) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state) => {
            const filter = state.todos.filter(item => item.completed === false);
            state.todos = filter;
        }
    }

})

export default todosSlice.reducer;
export const { addTodo, toogle/* destroy */, changeActive, clearCompleted } = todosSlice.actions;