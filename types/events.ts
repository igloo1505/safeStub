import type { serverClient } from '#/trpc/serverClient'
import { Prisma } from '@prisma/client'

export const TBDLocation: Prisma.LocationCreateOrConnectWithoutArenaInput = {
    where: {
        uniqueKey: "TBD"
    },
    create: {
        uniqueKey: "TBD",
        city: "TBD"
    }
}


export const TBDArena: Prisma.ArenaCreateOrConnectWithoutEventsInput = {
    where: {
        uniqueKey: "TBD"
    },
    create: {
        name: "TBD",
        uniqueKey: "TBD",
        location: {
            connectOrCreate: TBDLocation,
        },
        amenities: {
            create: {}
        }
    }
}

export const TBDTeam: Prisma.TeamCreateOrConnectWithoutEventInput = {
    where: {
        uniqueKey: "TBD",
    },
    create: {
        name: "TBD",
        league: "NFL"
    }
}

export type SearchEventsResult = Awaited<ReturnType<typeof serverClient.searchEvents>>
