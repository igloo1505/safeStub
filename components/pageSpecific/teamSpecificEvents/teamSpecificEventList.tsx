import { serverClient } from '#/trpc/serverClient'
import React from 'react'
import TeamSpecificEventLi from './teamSpecificEventLi'

export type TeamSpecificEventsType = NonNullable<Awaited<ReturnType<typeof serverClient.getTeamSpecificGames>>['teamData']>['Event']

interface TeamSpecificEventListProps {
    events: TeamSpecificEventsType
    homeArenaId: number | null
}

const TeamSpecificEventList = ({ events, homeArenaId }: TeamSpecificEventListProps) => {
    return (
        <div className={"w-full mt-6"} >
            <ul>
                {events.map((event) => <TeamSpecificEventLi key={event.id} home={homeArenaId === event.arenaId} event={event} />)}
            </ul>
        </div>
    )
}


TeamSpecificEventList.displayName = "TeamSpecificEventList"


export default TeamSpecificEventList;
