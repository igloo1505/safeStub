import { SignupFormType, initialSignupFormState } from './signup'
import { FilterEventsFormType, initialFilterEventFormState } from './events'
import { ListItemFormType, initialListItemFormState } from './listItem'

export type InitialFormStateType = {
    signUp: SignupFormType
    events: FilterEventsFormType
    listItem: ListItemFormType
}

export const initialFormState = {
    signUp: initialSignupFormState,
    events: initialFilterEventFormState,
    listItem: initialListItemFormState
}


