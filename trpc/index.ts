import { publicProcedure, router } from "./trpc";
import { prisma } from "#/db/db"
import { z } from 'zod'
import { gcmSubscriptionChangeSchema, settingsChangeSchema } from "#/zod/local/settingsChange";
import { validateGetUpcomingEvents } from "#/lib/events/getUpcomingEvents";
import { paginateSchema } from "#/types/utility";
import { UserAccessInput } from "#/types/auth";
import { NFLTeamName } from "@prisma/client";
import { saleFormSchema } from "#/components/pageSpecific/sell/form/saleFormContext";
import { formatTicketGroupCreate } from "#/lib/formatting/ticketGroupCreate";




export const appRouter = router({
    getSettings: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.settings.findFirst({
            where: {
                userId: opts.input
            }
        })
    }),
    getUser: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.user.findFirst({
            where: {
                id: opts.input
            },
            include: {
                settings: true
            }
        })
    }),
    updateSettings: publicProcedure.input(settingsChangeSchema).mutation(async (opts) => {
        let settings = await prisma.settings.findFirst({})
        if (!settings) return
        let res = await prisma.settings.update({
            where: {
                id: settings.id,
            },
            data: opts.input
        })
        return res
    }),
    setUserGCMRegistration: publicProcedure.input(gcmSubscriptionChangeSchema).mutation(async (opts) => {
        let user = await prisma.user.update({
            where: {
                id: opts.input.id
            },
            data: {
                gcmSubscription: opts.input.gcmSubscription ? JSON.stringify(opts.input.gcmSubscription) : undefined
            }
        })
        return user
    }),
    getGcmSubscription: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.user.findFirst({
            where: {
                id: opts.input
            },
            select: {
                gcmSubscription: true
            }
        })
    }),
    getUpcomingEvents: publicProcedure.input(validateGetUpcomingEvents).query(async (opts) => {
        return await prisma.event.findMany({
            where: {
                date: {
                    gte: opts.input.start || new Date()
                }
            },
            skip: opts.input.skip || 0,
            take: opts.input.take || 10,
            orderBy: {
                date: "asc"
            },
            include: {
                participants: true,
                arena: true,
            }
        })
    }),
    getTeamSpecificGames: publicProcedure.input(z.nativeEnum(NFLTeamName)).query(async (opts) => {
        let now = new Date()
        let data = await prisma.team.findFirst({
            where: {
                name: opts.input
            },
            include: {
                Event: {
                    orderBy: {
                        date: "asc"
                    },
                    where: {
                        date: {
                            gte: now
                        }
                    },
                    include: {
                        participants: true,
                        tickets: true,
                        ticketGroups: true,
                        arena: {
                            include: {
                                location: true
                            }
                        },
                        _count: true
                    },
                }
            },

        })
        let futureEvents = data?.Event || []
        let homeEvents = futureEvents.filter((e) => e.arenaId === data?.homeArenaId) || []
        let _home = homeEvents.map((e) => e.tickets.length || 0)
        return {
            teamData: data,
            totalEvents: futureEvents.length || 0,
            totalHomeEvents: homeEvents.length,
            totalAwayEvents: futureEvents.length - homeEvents.length,
            totalTickets: futureEvents.map((a) => a.tickets.length).reduce((a, b) => a + b) || 0,
            totalAwayTickets: futureEvents.filter((e) => e.arenaId !== data?.homeArenaId).map((e) => e.tickets.length).reduce((a, b) => a + b),
            totalHomeTickets: _home.length > 0 ? _home.reduce((a, b) => a + b) : 0
        }
    }),
    getUsers: publicProcedure.input(paginateSchema).query(async (opts) => {
        return await prisma.user.findMany({
            skip: opts.input.skip || 0,
            take: opts.input.take || 50,
            orderBy: [{
                createdAt: "asc",
            }, {
                role: "asc"
            }]
        })
    }),
    setUserAccess: publicProcedure.input(UserAccessInput).mutation(async (opts) => {
        // TODO: Make sure this cookies are checked for admin access here once this is up and running. Leaving this for now to set initial admin access.
        return await prisma.user.update({
            where: {
                id: opts.input.userId,
            },
            data: {
                role: opts.input.role
            }
        })
    }),
    getEvent: publicProcedure.input(z.object({
        eventId: z.number().int(),
        take: z.number().int().default(50),
        skip: z.number().int().default(0),
    })).query(async (opts) => {
        return await prisma.event.findFirst({
            where: {
                id: opts.input.eventId
            },
            include: {
                arena: {
                    include: {
                        location: true,
                        homeTeams: true
                    }
                },
                tickets: {
                    take: opts.input.take,
                    skip: opts.input.skip,
                },
                ticketGroups: {
                    take: opts.input.take,
                    skip: opts.input.skip,
                    include: {
                        tickets: true
                    }
                },
                tags: true,
                participants: true,
                amenities: true
            }
        })
    }),
    createTicketGroup: publicProcedure.input(saleFormSchema).mutation(async (opts) => {
        const formattedData = formatTicketGroupCreate(opts.input)
        return await prisma.ticketGroup.create({
            data: formattedData,
            select: {
                id: true
            }
        })
    }),
    getTicketGroup: publicProcedure.input(z.number().int()).query(async (opts) => {
        return await prisma.ticketGroup.findFirst({
            where: {
                id: opts.input
            },
            include: {
                tickets: true,
                Event: true
            }
        })
    })
})


export type AppRouterType = typeof appRouter
