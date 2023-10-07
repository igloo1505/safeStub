import { Transaction } from "@prisma/client"

interface FlatTicketItem {
    [k: string]: any
    ticketGroups:
    {
        [k: string]: any
        tickets: any[]
        transaction: Transaction & { [k: string]: any } & any
    }[]
}


export const getFlattenedTickets = <T extends FlatTicketItem>(a: FlatTicketItem) => {
    let t: ((T['ticketGroups'][number]['tickets'][number]) & { transactionAvereragedCost: number, transactionNTickets: number })[] = []
    for (const k of a.ticketGroups) {
        t = t.concat(k.tickets.map((_t) => ({ ..._t, transactionAvereragedCost: k?.transaction?.listedPrice ? k.transaction.listedPrice / k.tickets.length : -1, transactionNTickets: k.tickets.length, transactionId: k.transaction.id })))
    }
    return t
}


interface FlatTicketItemFromTransaction {
    [k: string]: any
    ticketGroups:
    {
        [k: string]: any
        tickets: any[]
    }[]
}

export const getFlattenedTicketsFromTransaction = <T extends FlatTicketItemFromTransaction>(a: FlatTicketItemFromTransaction) => {
    let t: ((T['ticketGroups'][number]['tickets'][number]) & { transactionAvereragedCost: number, transactionNTickets: number })[] = []
    for (const k of a.ticketGroups) {
        t = t.concat(k.tickets.map((_t) => ({ ..._t, transactionAvereragedCost: a.listedPrice ? a.listedPrice / k.tickets.length : -1, transactionNTickets: k.tickets.length, transactionId: a.id })))
    }
    return t
}
