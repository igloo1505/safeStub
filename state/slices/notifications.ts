import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { initialNotificationState } from "../initial/notifications";

const slice = createSlice({
    name: "UI",
    initialState: initialState.notifications as typeof initialState['notifications'],
    reducers: {
        showNotification(state, action: PayloadAction<keyof Omit<typeof initialState.notifications.modals, "ticketDetail">>) {
            state.modals[action.payload] = true
        },
        closeNotification(state, action: PayloadAction<keyof typeof initialState.notifications.modals>) {
            state.modals[action.payload] = false
        },
        closeAllNotifications(state, action: PayloadAction<keyof typeof initialState.notifications.modals>) {
            state.modals = initialNotificationState.modals
        },
        showTicketDetailModal(state, action: PayloadAction<typeof initialState.notifications.modals.ticketDetail>) {
            state.modals.ticketDetail = action.payload
        }
    }
})

export const { showNotification, showTicketDetailModal, closeNotification, closeAllNotifications } = slice.actions
export default slice.reducer
