import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { NFLTeamName } from "@prisma/client";


interface RequestContext {
}


const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .get(async (req, ctx): Promise<NextResponse> => {
        try {
            let t = await prisma.team.findMany({
                select: {
                    name: true
                }
            })
            let teams = t.map((t: { name: NFLTeamName }) => t.name)
            return new NextResponse(JSON.stringify({ teams }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>
}
