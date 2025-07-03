import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, email: "grupo17@gmail.com", password: "grupo17" }
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
        
    }
});

export const { add } = UsersSlice.actions;

export default UsersSlice.reducer;
