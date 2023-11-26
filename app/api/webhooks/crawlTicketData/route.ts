import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
// import { VividSeats } from "#/classes/crawl/vividSeats/vividSeats";

// import { SeatGeek } from "#/classes/crawl/seatGeek/seatGeek";
interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();

// const crawlVividSeats = async (headless: boolean) => {
//     let vividSeats = new VividSeats()
//     await vividSeats.init({ headless })
//     await vividSeats.crawl()
//     await vividSeats.close()
//     return vividSeats.ticketData
// }

// const crawlSeatGeek = async (headless: boolean) => {
//     let seatGeek = new SeatGeek()
//     await seatGeek.init({ headless })
//     await seatGeek.crawl()
// }

router
    .get(async (req, ctx) => {
        try {
            // let vivid = await crawlVividSeats(false)
            // console.log("vivid: ", vivid)
            // let seatGeek = await crawlSeatGeek(false)
            return new NextResponse(JSON.stringify({ success: true }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>
}
