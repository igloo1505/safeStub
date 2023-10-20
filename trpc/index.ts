import { publicProcedure, router } from "./trpc";
import { prisma } from "#/db/db"
import { z } from 'zod'
import { gcmSubscriptionChangeSchema, settingsChangeSchema } from "#/zod/local/settingsChange";
import { validateGetUpcomingEvents } from "#/lib/events/getUpcomingEvents";
import { paginateSchema } from "#/types/utility";
import { UserAccessInput } from "#/types/auth";
import { NFLTeamName, TRANSACTIONSTATUS, TicketStatus } from "@prisma/client";
import { saleFormSchema } from "#/components/pageSpecific/sell/form/saleFormContext";
import { getEventsSearchResult, searchEventsParams } from "#/utils/server/searchEvents";
import { findGreatDeals } from "#/utils/server/findEventDeals";
import { paginateParamsZod } from "#/utils/server/getPaginationData";
import { createTicketgroupTransaction } from "#/lib/formatting/ticketGroupCreate";
import { sendTicketListingSuccessEmail } from "#/lib/email/youGotMailMothaFucka/ticketListingSuccess";
import { sendSellerNotification } from "#/lib/engagement/sendSellerNotification";
import { contactInformationSchema } from "#/types/contactInformationSchema";



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
    updateUser: publicProcedure.input(contactInformationSchema).mutation(async (opts) => {
        return await prisma.user.update({
            where: {
                id: opts.input.id
            },
            data: {
                ...(opts.input.firstName && opts.input.firstName !== "" && {
                    firstName: opts.input.firstName
                }),
                ...(opts.input.lastName && opts.input.lastName !== "" && {
                    lastName: opts.input.lastName
                }),
                ...(opts.input.email && opts.input.email !== "" && {
                    email: opts.input.email
                }),
                ...(opts.input.phone !== undefined && {
                    phone: opts.input.phone
                }),
            }
        })
    }),
    getUserProfile: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.user.findFirst({
            where: {
                id: opts.input
            },
            include: {
                settings: true,
                purchaseHistory: {
                    include: {
                        bought: {
                            include: {
                                tickets: {
                                    include: {
                                        Event: {
                                            select: {
                                                id: true,
                                                title: true,
                                                description: true,
                                                date: true,
                                                arena: {
                                                    include: {
                                                        location: true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                ticketGroups: {
                                    include: {
                                        Event: {
                                            select: {
                                                id: true,
                                                title: true,
                                                description: true,
                                                date: true,
                                                arena: {
                                                    include: {
                                                        location: true
                                                    }
                                                }
                                            }
                                        },
                                        tickets: {
                                            include: {
                                                Event: {
                                                    select: {
                                                        id: true,
                                                        title: true,
                                                        description: true,
                                                        date: true,
                                                        arena: {
                                                            include: {
                                                                location: true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },

                                    }
                                }
                            }
                        },
                        sold: {
                            include: {
                                tickets: {
                                    include: {
                                        Event: {
                                            select: {
                                                id: true,
                                                title: true,
                                                description: true,
                                                date: true,
                                                arena: {
                                                    include: {
                                                        location: true
                                                    }
                                                }

                                            }
                                        }
                                    }
                                },
                                ticketGroups: {
                                    include: {
                                        Event: {
                                            select: {
                                                id: true,
                                                title: true,
                                                description: true,
                                                date: true,
                                                arena: {
                                                    include: {
                                                        location: true
                                                    }
                                                }
                                            }
                                        },
                                        tickets: {
                                            include: {
                                                Event: {
                                                    select: {
                                                        id: true,
                                                        title: true,
                                                        description: true,
                                                        date: true,
                                                        arena: {
                                                            include: {
                                                                location: true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },

                                    }
                                }

                            }
                        }
                    }
                }
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
                arena: {
                    include: {
                        location: true
                    }
                },
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
                    where: {
                        status: "forSale",
                    }
                },
                ticketGroups: {
                    take: opts.input.take,
                    skip: opts.input.skip,
                    where: {
                        tickets: {
                            some: {
                                status: "forSale"
                            }
                        }
                    },
                    include: {
                        tickets: {
                            where: {
                                status: "forSale"
                            }
                        },
                        transaction: true
                    }
                },
                tags: true,
                participants: true,
                amenities: true
            }
        })
    }),
    getPurchaseHistory: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.purchaseHistory.findFirst({
            where: {
                userId: opts.input
            }
        })
    }),
    getTransactionDetails: publicProcedure.input(z.object({
        userId: z.string().optional(),
        transactionId: z.coerce.number().int(),
    })).query(async (opts) => {
        let data = await prisma.transaction.findFirst({
            where: {
                id: opts.input.transactionId,
                ...(opts.input.userId && {
                    AND: {
                        seller: {
                            userId: opts.input.userId
                        }
                    }
                })
            },
            include: {
                ticketGroups: {
                    include: {
                        tickets: true
                    }
                },
                tickets: true
            }
        })
        let eventIds: number[] = []
        if (data?.tickets?.length && data?.tickets?.length > 0) {
            for (const k of data?.tickets) {
                if (k.eventId && !eventIds.includes(k.eventId)) {
                    eventIds.push(k.eventId)
                }
            }
        }
        if (data?.ticketGroups?.length && data?.ticketGroups?.length > 0) {
            for (const k of data?.ticketGroups) {
                if (k.eventId && !eventIds.includes(k.eventId)) {
                    eventIds.push(k.eventId)
                }
            }
        }
        let events = eventIds.length > 0 ? await prisma.event.findMany({
            where: {
                id: {
                    in: eventIds
                }
            },
            include: {
                arena: {
                    include: {
                        location: true
                    }
                }
            }
        }) : []
        return {
            ...data,
            events
        }
    }),
    createTransaction: publicProcedure.input(saleFormSchema).mutation(async (opts) => {
        const formattedData = createTicketgroupTransaction(opts.input)
        let data = await prisma.transaction.create({
            data: formattedData,
            select: {
                id: true,
                ticketGroups: {
                    select: {
                        confirmationId: true
                    }
                },
            }
        })
        if (data) {
            await sendTicketListingSuccessEmail({
                confirmationId: data.ticketGroups[0].confirmationId,
                username: opts.input.sellerId,
                tickets: opts.input.tickets,
                eventId: opts.input.eventId
            })
        }
        return data
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
    }),
    getTicketsById: publicProcedure.input(z.number().int().array()).query(async (opts) => {
        return await prisma.ticket.findMany({
            where: {
                id: {
                    in: opts.input
                }
            }
        })
    }),
    getCheckoutData: publicProcedure.input(z.object({
        transactionId: z.number().int(),
        ticketIds: z.number().array()
    })).query(async (opts) => {
        let data = await prisma.transaction.findFirst({
            where: {
                id: opts.input.transactionId
            },
            include: {
                ticketGroups: {
                    include: {
                        tickets: {
                            where: {
                                id: {
                                    in: opts.input.ticketIds
                                }
                            }
                        }
                    }
                }
            }
        })

        return {
            transaction: data,
            averagedTotal: data ? data.listedPrice * data.ticketGroups.map((t) => t.tickets.length).reduce((a, b) => a + b) / opts.input.ticketIds.length : 0
        }
    }),
    searchEvents: publicProcedure.input(searchEventsParams).query(async (opts) => await getEventsSearchResult(opts.input)),
    findGreatDeals: publicProcedure.input(paginateParamsZod).query(async (opts) => await findGreatDeals(opts.input)),
    getUserTransactionHistory: publicProcedure.input(z.object({
        userId: z.string(),
        skip: z.number().int().default(0),
        take: z.number().int().default(20),
    })).query(async (opts) => {
        return await prisma.ticket.findMany({
            where: {
                OR: [
                    {
                        seller: {
                            id: opts.input.userId
                        }
                    },
                    {
                        buyer: {
                            id: opts.input.userId
                        }
                    }
                ]
            },
            skip: opts.input.skip,
            take: opts.input.take
        })
    }),
    setTicketsPurchased: publicProcedure.input(z.object({
        ticketIds: z.number().int().array(),
        purchaserId: z.string(),
        purchaseAmount: z.number()
    })).mutation(async (opts) => {
        await prisma.ticket.updateMany({
            where: {
                id: {
                    in: opts.input.ticketIds
                }
            },
            data: {
                buyerId: opts.input.purchaserId,
                status: "awaitingTransferFromSellerToSafeStub"
            }
        })
        return sendSellerNotification({ ticketIds: opts.input.ticketIds })
    }),
    sendTextNotificationToSeller: publicProcedure.input(z.object({
        ticketIds: z.number().int().array()
    })).mutation(async (opts) => {
        return await sendSellerNotification({ ticketIds: opts.input.ticketIds })
    }),
    getUserPhone: publicProcedure.input(z.string()).query(async (opts) => {
        let data = await prisma.user.findFirst({
            where: {
                id: opts.input
            },
            select: {
                phone: true
            }
        })
        return data?.phone
    }),
    setTicketStatus: publicProcedure.input(z.object({
        ids: z.number().int().array(),
        status: z.nativeEnum(TicketStatus)
    })).mutation(async (opts) => {
        return await prisma.ticket.updateMany({
            where: {
                id: {
                    in: opts.input.ids
                }
            },
            data: {
                status: opts.input.status
            }
        })
    }),
    getAllPendingTickets: publicProcedure.query(async (opts) => {
        return await prisma.ticket.findMany({
            select: {
                id: true,
                seat: true,
                row: true,
                section: true,
                transaction: {
                    select: {
                        id: true
                    }
                },
                TicketGroup: {
                    select: {
                        id: true,
                        transaction: {
                            select: {
                                id: true
                            }
                        }
                    }
                },
                seller: {
                    select: {
                        email: true,
                        id: true
                    }
                },
                Event: {
                    select: {
                        id: true,
                        description: true,
                        arena: {
                            select: {
                                location: true
                            }
                        }
                    }
                }
            }
        })
    }),
    getTicketsPendingTransferToSafeStub: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.ticket.findMany({
            where: {
                AND: [
                    { sellerId: opts.input === "all" ? undefined : opts.input },
                    { status: "awaitingTransferFromSellerToSafeStub" }
                ]
            },
            include: {
                Event: {
                    include: {
                        arena: {
                            include: {
                                location: true
                            }
                        }
                    }
                }
            }
        })
    })
})


export type AppRouterType = typeof appRouter
