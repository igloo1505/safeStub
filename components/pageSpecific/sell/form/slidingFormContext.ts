"use client"
import { createContext } from "react";

export const defaultStepState = { step: 1, maxStep: 0, id: "" }

type StepActions = "increment" | "decrement"

type ActionType = { type: StepActions }

export const stepReducer = (state: typeof defaultStepState, action: ActionType) => {
    switch (action.type) {
        case 'increment': {
            return {
                ...state,
                step: state.step === state.maxStep ? state.step : state.step + 1
            }
        }
        case 'decrement': {
            return {
                ...state,
                step: state.step === 1 ? state.step : state.step - 1
            }
        }
    }
}


export const SlidingFormContext = createContext(defaultStepState)


export const SlidingFormDispatchContext = createContext<React.Dispatch<ActionType>>(null!)
