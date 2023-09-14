import PageContentWrapper from '#/components/layout/pageContentWrapper';
import SingleEventTeamLogoBox from '#/components/pageSpecific/singleEvent/logoBox';
import EventSpecificSeatingChart from '#/components/pageSpecific/singleEvent/seatingChart';
import EventSpecificTicketList from '#/components/pageSpecific/singleEvent/ticketList';
import SingleEventTitleBar from '#/components/pageSpecific/singleEvent/title';
import { serverClient } from '#/trpc/serverClient';
import React, { useId } from 'react'




interface EventSpecificPageProps {
    params: {
        eventId: string
    }
}

const EventSpecificPage = async ({ params: { eventId } }: EventSpecificPageProps) => {
    const event = await serverClient.getEvent({ eventId: parseInt(eventId) })
    return (
        <PageContentWrapper>
            <div className={"w-5/6 max-w-screen-xl grid grid-cols-[2fr_1fr]"}>
                <SingleEventTitleBar event={event} />
                {event && <SingleEventTeamLogoBox teams={event?.participants} />}
            </div>
            <div className={"w-5/6 max-w-screen-xl grid grid-cols-[2fr_1fr] min-h-[40vh] my-8"}>
                <EventSpecificSeatingChart arena={event?.arena} />
                <EventSpecificTicketList />
            </div>
        </PageContentWrapper>
    )
}


EventSpecificPage.displayName = "EventSpecificPage"


export default EventSpecificPage;
