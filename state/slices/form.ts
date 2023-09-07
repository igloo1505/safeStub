import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import { InitialFormStateType } from '../initial/forms/formState'
import { CityApiType } from "#/types/inputValidation";
import { initialFilterState } from "../initial/forms/events";
import { EventsPageSearchParams } from "#/utils/routing/searchParams";
import { ValidListItemStep } from "../initial/forms/listItem";



const slice = createSlice({
    name: "form",
    initialState: initialState.form as typeof initialState['form'],
    reducers: {
        setSignupFormData(state, action: PayloadAction<InitialFormStateType['signUp']>) {
            state.signUp = action.payload
        },
        setRetrievedCities(state, action: PayloadAction<CityApiType[]>) {
            state.signUp.localCities = action.payload
        },
        setShowPanelContent(state, action: PayloadAction<InitialFormStateType['events']['panel']['replaceContent']>) {
            state.events.panel.replaceContent = action.payload
        },
        setEventsFilterData(state, action: PayloadAction<Partial<InitialFormStateType['events']['panel']['filter']>>) {
            state.events.panel.filter = {
                ...state.events.panel.filter,
                ...action.payload
            }
        },
        setInitialEventsFilterData(state, action: PayloadAction<EventsPageSearchParams>) {
            state.events.panel.filter.tags = typeof action.payload.tags === "string" ? [action.payload.tags] : action.payload.tags || []
            state.events.panel.filter.byDate = action.payload.byDate || undefined
        },
        resetEventsFilter(state) {
            state.events.panel.filter = initialFilterState
        },
        removeEventFilterTag(state, action: PayloadAction<string>) {
            state.events.panel.filter.tags = state.events.panel.filter.tags?.filter((t) => t !== action.payload) || []
        },
        setListItemFormStep(state, action: PayloadAction<ValidListItemStep>) {
            state.listItem.step = action.payload
        }
    }
})


export const { setSignupFormData, setListItemFormStep, setInitialEventsFilterData, removeEventFilterTag, resetEventsFilter, setShowPanelContent, setEventsFilterData, setRetrievedCities } = slice.actions
export default slice.reducer

