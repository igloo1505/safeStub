import { NFLTeamName, Prisma } from '@prisma/client'
import data from '../../data/static/fromEspn/nfl.json'


type RelevantType = "full" | "default" | "dark" | "scoreboard"

interface LogoType {
    path: string
    width: number
    height: number
    rel: RelevantType[]
    url: string
}

interface PreSeedTeamType extends Omit<Prisma.TeamCreateInput, "colors" | "logos"> {
    colors: Prisma.ColorsCreateInput
    logos: LogoType[]
}

const preSeedTeams: PreSeedTeamType[] = data.sports[0].leagues[0].teams.map((t) => ({
    abbreviation: t.team.abbreviation,
    name: t.team.name === "49ers" ? "FourtyNiners" : t.team.name as NFLTeamName,
    nickname: t.team.nickname,
    displayName: t.team.displayName,
    displayName_short: t.team.shortDisplayName,
    colors: {
        primary: t.team.color,
        secondary: t.team.alternateColor
    },
    logos: t.team.logos.map((l) => ({
        url: l.href,
        path: `/assets/teamLogos/${l.href.split("teamlogos/")[1]}`,
        width: l.width,
        height: l.height,
        rel: l.rel as RelevantType[]
    }))
}))


const seedTeams: Prisma.TeamCreateArgs[] = preSeedTeams.map((t) => ({
    data: {
        ...t,
        colors: {
            create: {
                ...t.colors
            }
        },
        logos: {
            createMany: {
                data: t.logos
            }
        }
    }
}))



export default seedTeams
