import { SaleFormObjectType } from "#/components/pageSpecific/sell/form/saleFormContext";
import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { calculatePayout, getTotalWithFees } from "../business/calculatePayout";



// export const formatTicketGroupCreate = (data: SaleFormObjectType): Prisma.TicketGroupCreateInput => {
//     return {
//         confirmationId: randomUUID(),
//         Event: {
//             connect: {
//                 id: data.eventId
//             }
//         },
//         seller: {
//             connect: {
//                 id: data.sellerId
//             }
//         },
//         tickets: {
//             createMany: {
//                 data: data.tickets.map((t) => ({
//                     eventId: data.eventId,
//                     section: t.section,
//                     row: t.row,
//                     seat: t.seat,
//                     sellerId: data.sellerId,
//                 }))
//             }
//         }
//     }
// }


export const createTicketgroupTransaction = (data: SaleFormObjectType): Prisma.TransactionCreateInput => {
    return {
        listedPrice: data.pricePerTicket * data.tickets.length,
        status: "forSale",
        total: getTotalWithFees(data),
        payout: calculatePayout(data),
        payoutMethod: data.payoutMethod,
        seller: {
            connect: {
                userId: data.sellerId
            }
        },
        ticketGroups: {
            create: {
                confirmationId: randomUUID(),
                tickets: {
                    createMany: {
                        data: data.tickets.map((t) => {
                            return {
                                section: t.section,
                                row: t.row,
                                seat: t.seat,
                                sellerId: data.sellerId,
                                ...(t.ticketNumber && { ticketNumber: t.ticketNumber })
                            }
                        })
                    }
                }
            }
        },
    }
}
