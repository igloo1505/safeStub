import { UserProfileDetails } from "#/components/pageSpecific/profile/profilePageContainer"
import { PaymentHistoryItem, payoutMethodLabelMap, transactionStatusLabelMap } from "#/types/profile"
import { TRANSACTIONSTATUS } from "@prisma/client"
import { formatUSD } from "./currency"
import { day } from "./dates"
import { getFlattenedTickets } from "./util"


const dFormat = "MM/D/YY"

export const formatPaymentHistoryForTable = (history?: NonNullable<UserProfileDetails>['purchaseHistory']): PaymentHistoryItem[] => {
    console.log("history: ", history)
    let d: (PaymentHistoryItem & { nDate: number })[] = []
    /* let bought = history?.bought.map((t) => t.tickets)auto_1fr */
    if (history?.bought) {
        for (const p of history.bought) {
            d.push({
                type: "bought",
                date: p?.purchasedOn ? day(p.purchasedOn).format(dFormat) : "--",
                event: p.tickets[0]?.eventId,
                nDate: new Date(p.purchasedOn || p.postedOn).valueOf(),
                listingId: p.id,
                seatData: p.tickets.length,
                ticketNumber: <div>{p.tickets.map((t) => <div key={t.ticketNumber}>{t.ticketNumber}</div>)}</div> || "--",
                total: p.payout ? formatUSD(p.payout) : "--",
                payoutMethod: p.payoutMethod ? payoutMethodLabelMap[p.payoutMethod] : "--",
                transactionStatus: p.status ? transactionStatusLabelMap[p.status] : "--"
            })
        }
    }
    if (history?.sold) {
        for (const p of history.sold) {
            let _loc = p.ticketGroups[0]?.eventId || p.tickets[0]?.eventId
            d.push({
                type: "sold",
                date: day(p.postedOn).format(dFormat),
                event: _loc,
                nDate: new Date(p.purchasedOn || p.postedOn).valueOf(),
                listingId: p.id,
                /// @ts-ignore
                seatData: getFlattenedTickets<typeof p>(p).length,
                ticketNumber: <div>{p.tickets.map((t) => <div key={t.ticketNumber}>{t.ticketNumber}</div>)}</div> || "--",
                total: formatUSD(p.listedPrice) || "--",
                payoutMethod: p.payoutMethod ? payoutMethodLabelMap[p.payoutMethod] : "--",
                transactionStatus: p.status ? transactionStatusLabelMap[p.status] : "--"
            })
        }
    }
    d = d.sort((a, b) => a.nDate - b.nDate)
    return d
}

export const activeTransactionStatus: TRANSACTIONSTATUS[] = [
    "forSale",
    "inProgress",
    "awaitingIdVerification"
]
