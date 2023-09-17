import PageContentWrapper from '#/components/layout/pageContentWrapper'
import TeamSpecificEventList from '#/components/pageSpecific/teamSpecificEvents/teamSpecificEventList'
import TeamSpecificEventsTitleBar from '#/components/pageSpecific/teamSpecificEvents/teamSpecificEventsTitleBar'
import { serverClient } from '#/trpc/serverClient'
import { NFLTeamName } from '@prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'


interface TeamSpecificPageProps {
    params: {
        teamName: NFLTeamName
    }
}



const TeamSpecificPage = async ({ params: {
    teamName
} }: TeamSpecificPageProps) => {
    const { teamData, totalEvents, totalTickets, totalAwayEvents, totalHomeEvents, totalHomeTickets, totalAwayTickets, } = await serverClient.getTeamSpecificGames(teamName)
    console.log("teamGames: ", teamData)
    if (!teamData) return notFound()
    return (
        <PageContentWrapper>
            <div className={"max-w-screen-lg w-5/6 state-all group/teamSpecific"} id={"team-specific-event-list"}>
                <TeamSpecificEventsTitleBar
                    displayName={teamData.displayName || teamData.name}
                    teamName={teamData.name}
                    totalEvents={totalEvents}
                    totalTickets={totalTickets}
                    totalAwayEvents={totalAwayEvents}
                    totalHomeEvents={totalHomeEvents}
                    totalAwayTickets={totalAwayTickets}
                    totalHomeTickets={totalHomeTickets}
                />
                {teamData.Event && <TeamSpecificEventList homeArenaId={teamData.homeArenaId} events={teamData.Event} />}
            </div>
        </PageContentWrapper>
    )
}


TeamSpecificPage.displayName = "TeamSpecificPage"


export default TeamSpecificPage;
