import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, username: "user", password: "user" }
]

const UsersSlice = createSlice({
    name: "users",
    initialState:{
        entities: initialState,
    },
    reducers: {
        add: (state, action) => {
            state.entities.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter(user => user.id !== action.payload.id);
        }
    }
});

export const { add, remove } = UsersSlice.actions;

export default UsersSlice.reducer;
