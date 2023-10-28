import { EXTERNALSOURCE } from "@prisma/client";
import { CrawlSource } from "../abstractCrawlSource";
import { ExternalTicketData } from "../externalTicketData";

export class SeatGeek extends CrawlSource {
    baseUrl: string = "https://www.seatgeek.com"
    name: EXTERNALSOURCE = "seatGeek"
    auth = undefined
    ticketData: ExternalTicketData[] = []
    constructor() {
        super()
    }
    async crawl() {

    }
}
