import { createSlice } from '@reduxjs/toolkit';

export interface Todo{
    id: string,
    title: string,
    completed?: boolean,
}


const initialState: Todo[] = [
    {
        id: "1",
        title: "lorem ipsum",
        completed : true
    },
    {
        id: "2",
        title: "deneme 1 2",
        completed : false
    }
]

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers : {}

})

export default todosSlice.reducer;