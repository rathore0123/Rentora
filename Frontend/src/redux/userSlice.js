import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoginStatus: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;