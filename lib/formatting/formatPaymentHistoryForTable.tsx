import { UserProfileDetails } from "#/components/pageSpecific/profile/profilePageContainer"
import { PaymentHistoryItem, payoutMethodLabelMap, transactionStatusLabelMap } from "#/types/profile"
import { TRANSACTIONSTATUS } from "@prisma/client"
import { formatUSD } from "./currency"
import { day } from "./dates"


const dFormat = "MM/D/YY"

/* seatData: ( */
/*     <div className={"w-fit flex flex-col text-sm"}> */
/*         <div>{`section ${p.section}`}</div> */
/*         <div>{`row ${p.row}`}</div> */
/*         <div>{`seat ${p.seat}`}</div> */
/*     </div> */
/* ), */
export const formatPaymentHistoryForTable = (history?: NonNullable<UserProfileDetails>['purchaseHistory']): PaymentHistoryItem[] => {
    console.log("history: ", history)
    let d: (PaymentHistoryItem & { nDate: number })[] = []
    /* let bought = history?.bought.map((t) => t.tickets) */
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
            d.push({
                type: "sold",
                date: day(p.postedOn).format(dFormat),
                event: p.tickets[0]?.eventId,
                nDate: new Date(p.purchasedOn || p.postedOn).valueOf(),
                listingId: p.id,
                seatData: p.tickets.length,
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