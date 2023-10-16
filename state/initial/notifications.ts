import { PendingTicketList } from "#/types/query"
import { Ticket } from "@prisma/client"

interface InitialNotificationState {
    modals: {
        logout: boolean
        phoneInput: boolean
        ticketDetail: false | PendingTicketList[number]
    }
}


export const initialNotificationState: InitialNotificationState = {
    modals: {
        logout: false,
        phoneInput: false,
        ticketDetail: false
    }
}
