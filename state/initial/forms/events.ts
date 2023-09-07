import { EventsPageSearchParams } from "#/utils/routing/searchParams";
import { Event } from "@prisma/client";

export interface FilterEventsFilterDataType extends EventsPageSearchParams {
    tags: string[] | undefined
}


export interface FilterEventsFormType {
    panel: {
        open: boolean,
        replaceContent: false
        filter: FilterEventsFilterDataType
    }
    results: Event[]
}


export const initialFilterState: FilterEventsFormType['panel']['filter'] = {
    byDate: undefined,
    tags: [],
    category: "",
    performer: "",
    query: "",
}

export const isInitialFilterState = (filterState: FilterEventsFormType['panel']['filter']) => {
    const fstate = filterState
    const istate = initialFilterState
    if (fstate.byDate !== istate.byDate) return false
    if (fstate?.tags?.length !== 0) return false
    return true
}


export const initialFilterEventFormState: FilterEventsFormType = {
    panel: {
        replaceContent: false,
        open: false,
        filter: initialFilterState
    },
    results: []
}
