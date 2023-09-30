import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { initialNotificationState } from "../initial/notifications";

const slice = createSlice({
    name: "UI",
    initialState: initialState.notifications as typeof initialState['notifications'],
    reducers: {
        showNotification(state, action: PayloadAction<keyof typeof initialState.notifications.modals>) {
            state.modals[action.payload] = true
        },
        closeNotification(state, action: PayloadAction<keyof typeof initialState.notifications.modals>) {
            state.modals[action.payload] = false
        },
        closeAllNotifications(state, action: PayloadAction<keyof typeof initialState.notifications.modals>) {
            state.modals = initialNotificationState.modals
        },
    }
})

export const { showNotification, closeNotification, closeAllNotifications } = slice.actions
export default slice.reducer
