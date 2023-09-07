import initialState from "../initial/initialState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RetrievedUserData } from "#/types/AuthTypes";



const slice = createSlice({
    name: "auth",
    initialState: initialState.auth as typeof initialState['auth'],
    reducers: {
        authSuccess(state, action: PayloadAction<RetrievedUserData>) {
            state.user = action.payload
            state.authenticated = true
        },
        authFail(state) {
            state.user = undefined
            state.authenticated = false
        },
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.authenticated = action.payload
        },
        logoutUser(state) {
            state.user = initialState.auth.user
            state.authenticated = false
        },
    }
})


export const { authSuccess, authFail, logoutUser, setAuthenticated } = slice.actions
export default slice.reducer

