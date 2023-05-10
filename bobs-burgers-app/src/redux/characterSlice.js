import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../config";

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async () => {
    const res = await axios.get(`${API_URL}/characters/?limit=10`);
    return res.data;
})


export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: []
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.fulfilled]: (state, action) => {
            console.log(action.payload);
        }
    }
})



export default charactersSlice.reducer;