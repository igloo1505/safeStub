import { publicProcedure, router } from "./trpc";
import { prisma } from "#/db/db"
import { z } from 'zod'
import { gcmSubscriptionChangeSchema, settingsChangeSchema } from "#/zod/local/settingsChange";
import { validateGetUpcomingEvents } from "#/lib/events/getUpcomingEvents";
import { paginateSchema } from "#/types/utility";
import { UserAccessInput } from "#/types/auth";




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
                    include: {
                        arenaSection: true,
                    }
                },
                ticketGroups: {
                    take: opts.input.take,
                    skip: opts.input.skip,
                    include: {
                        tickets: {
                            include: {
                                arenaSection: true
                            }
                        }
                    }
                },
                tags: true,
                participants: true,
                amenities: true
            }
        })
    })
})


export type AppRouterType = typeof appRouter
