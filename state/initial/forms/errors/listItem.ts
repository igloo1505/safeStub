import { setListItemFormStep } from "#/state/slices/form"
import store from "#/state/store"
import { ListItemFormType } from "../listItem"

interface ValidationError {
    key: "cityNotFound"
    toastMessage?: (d: ListItemFormType) => string
    onError?: () => void
}

const cityNotFoundError: ValidationError = {
    key: "cityNotFound",
    toastMessage: (d) => `${d.data.arena.location.city} was not found.`,
    onError: () => {
        store.dispatch(setListItemFormStep("arenaLocation"))
    }
}

const errorMap: { [k in ValidationError['key']]: ValidationError } = {
    cityNotFound: cityNotFoundError
}


export const getListItemError = (errorKey: ValidationError['key']) => {
    return errorMap[errorKey]
}
