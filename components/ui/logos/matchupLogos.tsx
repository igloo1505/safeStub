import TeamLogo from '#/components/utility/teamLogo'
import clsx from 'clsx'
import React from 'react'
import { NFLTeamName } from '@prisma/client'


interface MatchupLogosProps {
    teamNames: [NFLTeamName, NFLTeamName]
    classes?: {
        container?: string
        icon?: string | [string, string]
    }
    noBaseClasses?: boolean
}

const MatchupLogos = ({ teamNames, noBaseClasses, classes }: MatchupLogosProps) => {
    const iconClassesIsArray = Array.isArray(classes?.icon)
    return (
        <div className={clsx(!noBaseClasses && "grid grid-cols-2 gap-2 md:gap-4", classes?.container && classes.container)}>
            <TeamLogo teamName={teamNames[0]} width={500} height={500}
                className={typeof classes?.icon === "undefined" ? "" : iconClassesIsArray ? classes?.icon?.[0] : classes?.icon as string}
            />
            <TeamLogo teamName={teamNames[1]} width={500} height={500}
                className={typeof classes?.icon === "undefined" ? "" : iconClassesIsArray ? classes?.icon?.[1] : classes?.icon as string}
            />
        </div>
    )
}


MatchupLogos.displayName = "MatchupLogos"


export default MatchupLogos;
