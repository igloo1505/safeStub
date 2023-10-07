import PageContentWrapper from '#/components/layout/pageContentWrapper';
import SingleEventTeamLogoBox from '#/components/pageSpecific/singleEvent/logoBox';
import EventSpecificSeatingChart from '#/components/pageSpecific/singleEvent/seatingChart';
import EventSpecificTicketList from '#/components/pageSpecific/singleEvent/ticketList';
import SingleEventTitleBar from '#/components/pageSpecific/singleEvent/title';
import { getFlattenedTickets } from '#/lib/formatting/util';
import { serverClient } from '#/trpc/serverClient';
import { redirect } from 'next/navigation';
import React from 'react'


interface EventSpecificPageProps {
    params: {
        eventId: string
    }
}



const EventSpecificPage = async ({ params: { eventId } }: EventSpecificPageProps) => {
    const event = await serverClient.getEvent({ eventId: parseInt(eventId) })
    if (!event) return redirect("/")
    const tickets = getFlattenedTickets(event)
    console.log("event: ", JSON.stringify(event, null, 4))
    return (
        <PageContentWrapper>
            <div className={"w-5/6 max-w-screen-xl flex flex-col-reverse grid-cols-1 md:grid md:grid-rows-1 md:grid-cols-[2fr_1fr]"}>
                <SingleEventTitleBar event={event} />
                {event && <SingleEventTeamLogoBox teams={event?.participants} />}
            </div>
            <div className={"w-full h-fit md:w-5/6 max-w-screen-xl flex flex-col justify-start items-center gap-12 md:gap-4 md:grid md:grid-cols-[2fr_1fr] min-h-[40vh] my-8"}>
                <EventSpecificSeatingChart arena={event?.arena} />
                <EventSpecificTicketList
                    tickets={tickets}
                />
            </div>
        </PageContentWrapper>
    )
}


EventSpecificPage.displayName = "EventSpecificPage"


export default EventSpecificPage;
