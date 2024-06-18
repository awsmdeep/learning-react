import { createSlice } from "@reduxjs/toolkit";

// Initial state of the authentication slice
const initialState = {
    status: false, // Tracks whether the user is logged in or not
    userData: null // Stores user data when the user is logged in
}

// Create the authentication slice
const authSlice = createSlice({
    name: "auth", // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Reducer for handling user login
        login: (state, action) => {
            state.status = true; // Set status to true indicating user is logged in
            state.userData = action.payload.userData; // Store the user data from the action payload
        },
        // Reducer for handling user logout
        logout: (state) => {
            state.status = false; // Set status to false indicating user is logged out
            state.userData = null; // Clear the user data
        }
    }
});

// Export the login and logout actions
export const { login, logout } = authSlice.actions;

// Export the reducer as the default export
export default authSlice.reducer;
