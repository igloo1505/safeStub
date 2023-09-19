import PageContentWrapper from '#/components/layout/pageContentWrapper'
import { serverClient } from '#/trpc/serverClient'
import React from 'react'



interface TicketSaleConfirmationPageProps {
    params: {
        eventId: string
        ticketGroupId: string
    }
}

const TicketSaleConfirmationPage = async (props: TicketSaleConfirmationPageProps) => {
    const event = await serverClient.getEvent({ eventId: parseInt(props.params.eventId) })
    const ticketGroup = await serverClient.getTicketGroup(parseInt(props.params.ticketGroupId))
    return (
        <PageContentWrapper>
            Event Confirmation Page
        </PageContentWrapper>
    )
}


TicketSaleConfirmationPage.displayName = "TicketSaleConfirmationPage"


export default TicketSaleConfirmationPage;
