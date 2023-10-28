import { EXTERNALSOURCE } from "@prisma/client";
import { CrawlSource } from "../abstractCrawlSource";
import { ExternalTicketData } from "../externalTicketData";

export class TickPick extends CrawlSource {
    baseUrl: string = "https://www.tickpick.com"
    name: EXTERNALSOURCE = "tickPick"
    auth = undefined
    ticketData: ExternalTicketData[] = []
    constructor() {
        super()
    }
    async crawl() {

    }
}
