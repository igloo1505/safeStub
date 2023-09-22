import { serverClient } from "#/trpc/serverClient"
import { NFLTeamName } from "@prisma/client"
import { Route } from "next"

export interface QuickLinkType {
    label: string
    category: "legal" | "navigation" | "user"
    href: Route
}




export type SingleEventReturned = Awaited<ReturnType<typeof serverClient.getEvent>>
