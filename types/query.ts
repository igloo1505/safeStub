import type { serverClient } from "#/trpc/serverClient"
import { Route } from "next"

export interface QuickLinkType {
    label: string
    category: "legal" | "navigation" | "user"
    href: Route
}




export type SingleEventReturned = Awaited<ReturnType<typeof serverClient.getEvent>>


export type PendingTicketList = NonNullable<Awaited<ReturnType<typeof serverClient.getTicketsPendingTransferToSafeStub>>>

export type AdminPendingTicketList = Awaited<ReturnType<typeof serverClient.getAllPendingTickets>>
