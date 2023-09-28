import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { getServerSession } from "#/actions/server/auth";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router

    .post(async (req, ctx) => {
        try {
            const { transactionId, sellerId } = await req.json()
            const session = await getServerSession()
            const where = {
                id: transactionId,
                AND: [
                    {
                        seller: {
                            is: {
                                userId: sellerId
                            }
                        }
                    }
                ]
            }
            if (sellerId === session?.user.id) {
                let data = await prisma.transaction.findFirst({
                    where,
                    select: {
                        id: true,
                        tickets: {
                            select: {
                                id: true
                            }
                        },
                        ticketGroups: {
                            select: {
                                id: true,
                                tickets: {
                                    select: {
                                        id: true
                                    }
                                }
                            }
                        }
                    }
                })
                let ticketIds: number[] = []
                let ticketGroupIds: number[] = []
                if (data) {
                    for (const k of data.ticketGroups) {
                        ticketGroupIds.push(k.id)
                        ticketIds = ticketIds.concat(k.tickets.map((t) => t.id))
                    }
                    for (const j of data.tickets) {
                        ticketIds.push(j.id)
                    }
                    await prisma.ticketGroup.deleteMany({
                        where: {
                            id: {
                                in: ticketGroupIds
                            }
                        }
                    })
                    await prisma.ticket.deleteMany({
                        where: {
                            id: {
                                in: ticketIds
                            }
                        }
                    })
                    let { id } = await prisma.transaction.delete({
                        where: { id: data?.id },
                        select: {
                            id: true
                        }
                    })
                    return new NextResponse(JSON.stringify({ id: id }));
                }
            }
            return new NextResponse(JSON.stringify({ toastDescription: "Unauthorized", toastVariant: "destructive", success: false }), { status: 402 });
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
