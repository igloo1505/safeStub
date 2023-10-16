"use client"
import { closeNotification } from '#/state/slices/notifications'
import store, { RootState } from '#/state/store'
import React from 'react'
import ModalOverlay from './modalOverlay'
import { connect } from 'react-redux'
import { initialState } from '#/state/initialState'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { SaleCardEventInfo } from '../pageSpecific/sell/form/step1'
import TicketCardItem from '../cards/ticketCardItem'


const connector = connect((state: RootState, props: any) => ({
    ticket: state.notifications.modals.ticketDetail,
    props: props
}))

interface TicketDetailModalProps {
    ticket: typeof initialState.notifications.modals.ticketDetail
}

const TicketDetailModal = connector(({ ticket }: TicketDetailModalProps) => {

    const closeLogout = () => {
        store.dispatch(closeNotification("ticketDetail"))
    }

    return (
        <ModalOverlay open={Boolean(ticket)} onClick={closeLogout}>
            <Card>
                {ticket && (
                    <>
                        <CardHeader>
                            <CardTitle>Ticket Details</CardTitle>
                            {ticket.Event && <SaleCardEventInfo
                                className={"py-2"}
                                event={ticket.Event}
                            />}
                        </CardHeader>
                        <CardContent>
                            <TicketCardItem
                                useScreen
                                className={"rounded-md"}
                                ticket={ticket} />
                        </CardContent>
                    </>
                )}
            </Card>
        </ModalOverlay>
    )
})


TicketDetailModal.displayName = "TicketDetailModal"


export default TicketDetailModal;
