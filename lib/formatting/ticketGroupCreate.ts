import { SaleFormObjectType } from "#/components/pageSpecific/sell/form/saleFormContext";
import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";



export const formatTicketGroupCreate = (data: SaleFormObjectType): Prisma.TicketGroupCreateInput => {
    return {
        confirmationId: randomUUID(),
        Event: {
            connect: {
                id: data.eventId
            }
        },
        seller: {
            connect: {
                id: data.sellerId
            }
        },
        tickets: {
            createMany: {
                data: data.tickets.map((t) => ({
                    eventId: data.eventId,
                    section: t.section,
                    row: t.row,
                    seat: t.seat
                }))
            }
        }
    }
}
