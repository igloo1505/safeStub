import { publicProcedure, router } from "./trpc";
import { prisma } from "#/db/db"
import { z } from 'zod'
import { gcmSubscriptionChangeSchema, settingsChangeSchema } from "#/zod/local/settingsChange";
import { validateGetUpcomingEvents } from "#/lib/events/getUpcomingEvents";




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
    })
})


export type AppRouterType = typeof appRouter
