import { CATEGORY, USSTATE } from "@prisma/client"

export interface ListItemFormDataType {
    category: CATEGORY
    arena: {
        id?: number
        name: string
        location: {
            id?: number
            street?: string
            zip?: number
            city: string
            state?: USSTATE | ""
        }
    }
}



export interface ListItemFormType {
    step: "basic" | "date" | "arena" | "arenaLocation"
    data: ListItemFormDataType
}


export type ValidListItemStep = ListItemFormType['step']

const _steps: ValidListItemStep[] = ["basic", "date", "arena", "arenaLocation"]

export const getStepAsNumber = (s: ValidListItemStep) => _steps.indexOf(s) + 1



export const initialListItemFormState: ListItemFormType = {
    step: "basic",
    data: {
        category: "Sports",
        arena: {
            name: "",
            location: {
                id: undefined,
                street: "",
                zip: 90210,
                city: "",
                state: ""
            }
        }
    }
}


export const validateListItemFormClientside = (form: ListItemFormType) => {
    if (form.data.arena.name === "") return false
    const loc = form.data.arena.location
    // if (loc.city)
}
