import { Route } from "next"

export interface QuickLinkType {
    label: string
    category: "legal" | "navigation" | "user"
    href: Route
}


export interface EventsSearchParams {
    sort: "upNext" | "price"
}
