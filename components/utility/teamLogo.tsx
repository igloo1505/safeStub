import { formatTeamName } from '#/lib/formatting/teamNames'
import { NFLTeamName } from '@prisma/client'
import Image from 'next/image'
import React, { ComponentProps } from 'react'



interface TeamLogoProps extends Omit<ComponentProps<typeof Image>, "src" | "alt"> {
    teamName: NFLTeamName
}

const TeamLogo = ({ teamName, ...props }: TeamLogoProps) => {
    return (
        <Image src={`/assets/teams/logos/${formatTeamName(teamName)}.svg`} alt={`${teamName} logo`} {...props} />
    )
}


TeamLogo.displayName = "TeamLogo"


export default TeamLogo;
