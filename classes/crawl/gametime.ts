import { EXTERNALSOURCE } from "@prisma/client";
import { CrawlSource } from "./abstractCrawlSource";
import { ExternalTicketData } from "./externalTicketData";

export class GameTime extends CrawlSource {
    baseUrl: string = "https://www.gametime.co/nfl-football"
    name: EXTERNALSOURCE = "gameTime"
    auth = undefined
    ticketData: ExternalTicketData[] = []
    constructor() {
        super()
    }
    async crawl() {

    }
}
