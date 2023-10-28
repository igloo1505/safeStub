import { prisma } from '#/db/db'
import { EXTERNALSOURCE, NFLTeamName, Prisma } from '@prisma/client'

interface ExternalEventData {
    date?: Date | string
    participants: NFLTeamName[]
    description?: string
    arena?: string
    location?: string
}

export interface ExternalDataProps {
    source: EXTERNALSOURCE
    id?: number
    eventId?: number
    event: ExternalEventData
    price: number
    seat?: string | null
    section?: string | null
    row?: string | null
}


export class ExternalTicketData {
    source: EXTERNALSOURCE
    eventId?: number
    event: ExternalEventData
    price: number
    id?: number
    seat?: string | null
    section?: string | null
    row?: string | null
    lastRetrieved: Date = new Date()
    constructor(props: ExternalDataProps) {
        this.source = props.source
        this.event = props.event
        this.eventId = props.eventId
        this.price = props.price
        this.seat = props.seat
        this.section = props.section
        this.row = props.row
        console.log(`------------
New External Ticket Data:
price: ${this.price}
`)
    }
    onSameDay(d1?: Date | string, d2?: Date | string): boolean {
        if (!d1) return false
        if (typeof d1 === "string") {
            d1 = new Date(d1)
        }
        if (!d2) return false
        if (typeof d2 === "string") {
            d2 = new Date(d2)
        }
        return [d1.getDate() === d2.getDate(), d1.getMonth() === d2.getMonth(), d1.getFullYear() === d2.getFullYear()].every((l) => l)
    }
    whereInput(): Prisma.ExternalTicketDataWhereUniqueInput {
        return {
            id: this.id
        } satisfies Prisma.ExternalTicketDataWhereUniqueInput
    }
    createInput(): Prisma.ExternalTicketDataCreateInput {
        return {
            event: {
                connect: {
                    id: this.eventId
                }
            },
            source: this.source,
            price: this.price,
            seat: this.seat,
            section: this.section,
            row: this.row
        } satisfies Prisma.ExternalTicketDataCreateInput
    }
    upsertArgs(): Prisma.ExternalTicketDataUpsertArgs {
        let ci = this.createInput()
        return {
            where: this.whereInput(),
            update: ci,
            create: ci
        } satisfies Prisma.ExternalTicketDataUpsertArgs
    }
    async findInternalEvent(): Promise<number | null> {
        let events = await prisma.event.findMany({
            where: {
                participants: {
                    every: {
                        name: {
                            in: this.event.participants
                        }
                    }
                }
            },
            select: {
                id: true,
                date: true
            }
        })
        let event = events.find((e) => this.onSameDay(this.event.date, e.date))
        return event ? event.id : null
    }
}
