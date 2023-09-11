import * as webpush from "web-push"
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";


interface RequestContext {
    // params: {
    //     id: string
    // }
}


// webpush.setGCMAPIKey(process.env.GCM_API_KEY!);
// webpush.setVapidDetails(
//     `mailto:${process.env.WEB_PUSH_EMAIL}`,
//     process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY!,
//     process.env.WEB_PUSH_PRIVATE_KEY!
// );


const router = createEdgeRouter<NextRequest, RequestContext>();


router

    .post(async (req, ctx) => {
        try {
            // const { subscription }: { subscription: webpush.PushSubscription } = await req.json()
            // webpush
            //     .sendNotification(
            //         subscription,
            //         JSON.stringify({ title: 'Hello Web Push', message: 'Your web push notification is here!' })
            //     )
            return new NextResponse(JSON.stringify({ success: true }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
