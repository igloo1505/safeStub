import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import { FaqFormData } from "../initial/adminState";
import { Faq } from "@prisma/client";



const slice = createSlice({
    name: "admin",
    initialState: initialState.admin as typeof initialState['admin'],
    reducers: {
        setFaqData(state, action: PayloadAction<FaqFormData>) {
            state.editing.faq = action.payload
        },
        clearFaqEdit(state) {
            state.editing.faq = initialState.admin.editing.faq
        },
        setFaqFormFromItem(state, action: PayloadAction<Faq>) {
            state.editing.faq = action.payload
        }
    }
})


export const { setFaqData, clearFaqEdit, setFaqFormFromItem } = slice.actions
export default slice.reducer

