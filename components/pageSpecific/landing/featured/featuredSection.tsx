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
        <div className={"w-full h-fit flex flex-col justify-center items-center"}>
            <h2 className={"text-[8vw] sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide"}>Upcoming Games</h2>
            <div className={"px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"}>
                {events.map((e) => <FeaturedEventCard event={e} key={e.id} />)}
            </div>
            <TeamsSection />
        </div>
    )
}


FeaturedSection.displayName = "FeaturedSection"


export default FeaturedSection;
