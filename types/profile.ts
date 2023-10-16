import { Event, PAYOUTMETHODS, TRANSACTIONSTATUS } from "@prisma/client"

export type ProfileActiveType = "profile" | "orders" | "sales" | "listings" | "payments" | "settings"


export const payoutMethodLabelMap: { [k in PAYOUTMETHODS]: string } = {
    paypal: "Paypal",
    credits: "Credits"
}

export const transactionStatusLabelMap: { [k in TRANSACTIONSTATUS]: string } = {
    forSale: "For Sale",
    awaitingIdVerification: "Awaiting Verification",
    idVerificationFailed: "Verification Failed",
    inProgress: "Awaiting Transfer",
    complete: "Complete"
}

export interface PaymentHistoryItem {
    date: string
    type: "bought" | "sold"
    event: React.ReactNode | string | number
    listingId: number
    seatData: React.ReactNode | number
    ticketNumber: string | React.ReactNode
    total: string
    payoutMethod: string
    transactionStatus: string
}
