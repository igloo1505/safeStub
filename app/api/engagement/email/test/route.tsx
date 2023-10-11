import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { sendTestEmail, testEmailTargets } from "../../../../../lib/email/nodeMailer";
import TicketsListedSuccessfullyEmail, { ticketListingSuccessOptions } from "../../../../../lib/email/templates/tsx/ticketsListedSuccessfully";
import { render } from "@react-email/render";

interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();

const justMe = true

export const ticketListSuccessDummyData = {
    username: 'aiglinski@gmail.com',
    event: {
        description: "Jets at Packers",
        date: '2-15-2024'
    },
    tickets: [
        { section: '4', row: '12', seat: '1' },
        { section: '4', row: '12', seat: '2' },
        { section: '4', row: '12', seat: '3' },
        { section: '4', row: '12', seat: '4' },
        { section: '4', row: '12', seat: '5' },
    ]
}


router
    .post(async (req, ctx) => {
        try {
            const options = ticketListingSuccessOptions({ username: ticketListSuccessDummyData.username, email: 'aiglinski414@gmail.com' })
            options.html = render(<TicketsListedSuccessfullyEmail {...ticketListSuccessDummyData} />)
            let info: any = []
            if (!justMe) {
                for (const k in testEmailTargets) {
                    let _info = await sendTestEmail({ ...options, to: k })
                    console.log("info: ", _info)
                    info.push(_info)
                }
            } else {
                let _info = await sendTestEmail(options)
                info.push(_info)
            }
            return new NextResponse(JSON.stringify({ success: true, info }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false, error: err }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>
}
