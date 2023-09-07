import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";



const slice = createSlice({
    name: "network",
    initialState: initialState.network as typeof initialState['network'],
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
            if (action.payload && state.timerState === "complete") {
                state.timerState = "timing"
                state.t = Date.now()
            }
            if (!action.payload && state.timerState === "timing") {
                state.timerState = "complete"
                if (state.t) {
                    state.reqTime = Date.now() - state.t
                }
                state.t = null
            }
        }
    }
})


export const {setLoading} = slice.actions
export default slice.reducer

