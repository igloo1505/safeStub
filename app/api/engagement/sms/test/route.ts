import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { sendSMS } from "#/lib/email/youGotMailMothaFucka/vonage";

interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();
const text = 'Coming from the server'
const chase = "18133104226"
const me = '14148674894'

router
    .post(async (req, ctx) => {
        try {
            let res = await sendSMS({
                to: chase,
                message: text
            })
            return new NextResponse(JSON.stringify({ res, success: true }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
