import { prisma } from "#/db/db"
import { sendSMS } from "./sendSms"

export const sendSellerNotification = async ({ ticketIds }: { ticketIds: number[] }) => {
    const nTickets = ticketIds.length
    let sellers = await prisma.ticket.findMany({
        where: {
            id: {
                in: ticketIds
            }
        },
        select: {
            seller: {
                select: {
                    phone: true
                }
            }
        },
        distinct: "sellerId"
    })
    let previousPhones: string[] = []
    for (const k of sellers.map((s) => s.seller.phone)) {
        if (k && !previousPhones.includes(k)) {
            previousPhones.push(k)
            await sendSMS({
                to: `${k}`,
                message: `You have a buyer for ${nTickets} ${nTickets > 1 ? 'tickets' : 'ticket'} you've listed on SafeStub. Please login to complete the transaction.`
            })
        }
    }
}
