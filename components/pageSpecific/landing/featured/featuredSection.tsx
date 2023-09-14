import { getUpcomingEvents } from '#/lib/events/getUpcomingEvents'
import React from 'react'
import FeaturedEventCard from './featuredEventCard'
import { serverClient } from '#/trpc/serverClient'
import TeamsSection from '../teamsSection'



interface FeaturedSectionProps {

}

const FeaturedSection = async (props: FeaturedSectionProps) => {
    const events = await serverClient.getUpcomingEvents({ skip: 0, take: 3 })
    return (
        <div className={"w-full h-fit flex flex-col justify-center items-center my-6"}>
            <div className={"px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                {events.map((e) => <FeaturedEventCard event={e} key={e.id} />)}
            </div>
            <TeamsSection />
        </div>
    )
}


FeaturedSection.displayName = "FeaturedSection"


export default FeaturedSection;
