import { EXTERNALSOURCE } from "@prisma/client";
import { CrawlSource } from "../abstractCrawlSource";
import { ExternalTicketData } from "../externalTicketData";


export class TicketMaster extends CrawlSource {
    baseUrl: string = "https://www.ticketmaster.com"
    name: EXTERNALSOURCE = "ticketMaster"
    auth = {
        username: "goodwinecharles93@gmail.com",
        password: "cegTpa93"
    }
    ticketData: ExternalTicketData[] = []
    constructor() {
        super()
    }
    async crawl() {

    }
}
