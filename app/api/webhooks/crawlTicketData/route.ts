import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { VividSeats } from "#/classes/crawl/vividSeats/vividSeats";

interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .get(async (req, ctx) => {
        try {
            let vividSeats = new VividSeats()
            await vividSeats.init({ headless: false })
            await vividSeats.crawl()
            // await vividSeats.close()
            return new NextResponse(JSON.stringify({ hrefs: vividSeats.teamHrefs }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
