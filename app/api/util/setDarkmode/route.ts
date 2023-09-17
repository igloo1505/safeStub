import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";


interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
            const { darkMode } = await req.json()
            let res = new NextResponse(JSON.stringify({}), getCorsHeaders(req, 200))
            if (darkMode) {
                res.cookies.set("darkMode", "true")
            } else {
                res.cookies.delete("darkMode")
            }
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
