import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import { ToastConfigType } from "#/types/uiTypes";
import initialUiState, { InitialUIStateType } from "../initial/ui";
import { v4 as uuid } from 'uuid';
import { ToastErrorTypes } from "#/types/AuthTypes";
import { defaultToastConfigs } from "#/data/defaultToasts";


const slice = createSlice({
    name: "UI",
    initialState: initialState.UI as typeof initialState['UI'],
    reducers: {
        setDrawerOpen(state, action: PayloadAction<boolean | "toggle">) {
            if (action.payload === "toggle") {
                state.drawer.open = !state.drawer.open
            }
            if (action.payload !== "toggle") {
                state.drawer.open = action.payload
            }
        },
        toggleDrawer(state) {
            state.drawer.open = !state.drawer.open
        },
        showToast(state, action: PayloadAction<Omit<ToastConfigType, "toastId">>) {
            state.toasts.push({
                ...action.payload,
                toastId: uuid(),
                isOpen: true
            })
        },
        clearToast(state, action: PayloadAction<string>) {
            state.toasts = state.toasts.filter((t) => t.toastId !== action.payload)
        },
        showDefaultToast(state, action: PayloadAction<ToastErrorTypes>) {
            state.toasts.push({
                ...defaultToastConfigs[action.payload],
                isOpen: true,
                toastId: uuid()
            })
        },
        showModal(state, action: PayloadAction<keyof Pick<typeof initialUiState.modals, "tos" | "privacy" | "payment">>) {
            state.modals[action.payload] = true
        },
        hideModal(state, action: PayloadAction<keyof InitialUIStateType['modals']>) {
            state.modals[action.payload] = false
        },
        hideAllModals(state) {
            state.modals = initialUiState.modals
        },
        setDarkMode(state, action: PayloadAction<boolean>) {
            state.darkMode = action.payload
        },
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode
        },
        setViewportDataState(state, action: PayloadAction<InitialUIStateType['viewport']>) {
            state.viewport = action.payload
        },
        setEventsPanelState(state, action: PayloadAction<boolean>) {
            state.pages.events.panelOpen = action.payload
        },
        setNavbarType(state, action: PayloadAction<boolean>) {
            state.hamburger = action.payload
        },
    }
})


export const { showToast, setEventsPanelState, toggleDarkMode, setNavbarType, setDrawerOpen, toggleDrawer, clearToast, showModal, hideModal, hideAllModals, setDarkMode, setViewportDataState, showDefaultToast } = slice.actions
export default slice.reducer

