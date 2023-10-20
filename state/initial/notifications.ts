import { AdminPendingTicketList, PendingTicketList } from "#/types/query"


interface TicketGroupSelectModalState extends NonNullable<AdminPendingTicketList> {

}

interface InitialNotificationState {
    modals: {
        logout: boolean
        phoneInput: boolean
        ticketDetail: false | PendingTicketList[number]
        ticketGroupSelect: TicketGroupSelectModalState | false
    }
}


export const initialNotificationState: InitialNotificationState = {
    modals: {
        logout: false,
        phoneInput: false,
        ticketDetail: false,
        ticketGroupSelect: false
    }
}
