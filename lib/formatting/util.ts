interface FlatTicketItem {
    [k: string]: any
    tickets: any[]
    ticketGroups:
    {
        [k: string]: any
        tickets: any[]
    }[]
}


export const getFlattenedTickets = <T extends FlatTicketItem>(a: FlatTicketItem) => {
    let t: (T['tickets'][number] | T['ticketGroups'][number]['tickets'])[] = a.tickets || []
    for (const k of a.ticketGroups) {
        t = t.concat(k.tickets)
    }
    return t
}
