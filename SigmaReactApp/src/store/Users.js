import { createSlice } from '@reduxjs/toolkit';
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        names: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.names = action.payload;
        },
    },
});
