import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { Prisma } from '@prisma/client'
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";
import { getUpcomingEvents } from "#/lib/events/getUpcomingEvents";


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .get(async (req, ctx): Promise<NextResponse> => {
        try {
            let params = req.nextUrl.searchParams
            let skip = parseInt(params.get("skip") || "0")
            let take = parseInt(params.get("take") || "10")
            let startDate = params.get("startDate") || new Date()
            let events = await getUpcomingEvents({ startDate, skip, take })
            let res = new NextResponse(JSON.stringify({ events }), getCorsHeaders(req, 200));
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
