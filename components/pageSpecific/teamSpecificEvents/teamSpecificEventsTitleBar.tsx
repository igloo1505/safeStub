import TeamLogo from '#/components/utility/teamLogo'
import { NFLTeamName } from '@prisma/client'
import React from 'react'
import TeamEventFilterButtonGroup from './teamEventFilter'



interface TeamSpecificEventsTitleBarProps {
    displayName: string
    teamName: NFLTeamName
    totalEvents: number
    totalTickets: number
    totalAwayEvents: number
    totalHomeEvents: number
    totalAwayTickets: number
    totalHomeTickets: number
}

const TeamSpecificEventsTitleBar = ({ displayName, totalHomeEvents, totalAwayEvents, totalHomeTickets, totalAwayTickets, totalEvents, totalTickets, teamName }: TeamSpecificEventsTitleBarProps) => {
    return (
        <div className={"w-full grid grid-cols-[3fr_1fr]"}>
            <div className={"w-full flex flex-col justify-center items-start"}>
                <h1 className={"w-fit text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide"}>{displayName}</h1>
                <div className={"flex flex-col justify-center items-start md:flex-row md:gap-6 mt-2"}>
                    <h4 className={"w-fit text-lg font-semibold text-foreground/80 hidden group-[.state-all]/teamSpecific:inline-block"}>
                        {`${totalEvents} Events Remaining`}
                    </h4>
                    <h4 className={"w-fit text-lg font-semibold text-foreground/80 hidden group-[.state-home]/teamSpecific:inline-block"}>
                        {`${totalHomeEvents} Events Remaining`}
                    </h4>
                    <h4 className={"w-fit text-lg font-semibold text-foreground/80 hidden group-[.state-away]/teamSpecific:inline-block"}>
                        {`${totalAwayEvents} Events Remaining`}
                    </h4>
                    <h4 className={"w-fit text-lg font-semibold text-foreground/80 hidden group-[.state-all]/teamSpecific:inline-block"}>
                        {`${totalTickets} ${totalTickets === 1 ? "Ticket" : "Tickets"} Available`}
                    </h4>
                    <h4 className={"w-fit text-lg font-semibold text-foreground/80 hidden group-[.state-away]/teamSpecific:inline-block"}>
                        {`${totalAwayTickets} ${totalAwayTickets === 1 ? "Ticket" : "Tickets"} Available`}
                    </h4>
                    <h4 className={"w-fit text-lg font-semibold text-foreground/80 hidden group-[.state-home]/teamSpecific:inline-block"}>
                        {`${totalHomeTickets} ${totalHomeTickets === 1 ? "Ticket" : "Tickets"} Available`}
                    </h4>
                </div>
                <TeamEventFilterButtonGroup activeFilterState="all" />
            </div>
            <div className={""}>
                <TeamLogo teamName={teamName} width={500} height={500} />
            </div>
        </div>
    )
}


TeamSpecificEventsTitleBar.displayName = "TeamSpecificEventsTitleBar"


export default TeamSpecificEventsTitleBar;
