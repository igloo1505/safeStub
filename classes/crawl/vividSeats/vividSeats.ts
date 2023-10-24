import { EXTERNALSOURCE, NFLTeamName } from "@prisma/client";
import { Page } from "puppeteer";
import { CrawlSource } from "../abstractCrawlSource";
import { ExternalTicketData } from "../externalTicketData";
import { VividSeatNflTeamPage } from "./vivSeatNflTeamPage";


interface ListingItem {
    href: string
}

interface TeamLinkItem {
    team: NFLTeamName
    href: string
    page: Page
    listingHrefs: ListingItem[]
}




export class VividSeats extends CrawlSource {
    baseUrl: string = "https://www.vividseats.com"
    name: EXTERNALSOURCE = "vividSeats"
    auth = {
        username: "chasegoodwin16@gmail.com",
        password: "DogsinChicago8"
    }
    ticketData: ExternalTicketData[] = []
    teamHrefs: VividSeatNflTeamPage[] = []
    constructor() {
        super()
    }
    collectAllHref() {
        const ems: Element[] = [];
        const findAllElements = function(nodes: ReturnType<typeof document.querySelectorAll>) {
            for (let i = 0, el; el = nodes[i]; ++i) {
                ems.push(el)
                if (el.shadowRoot) {
                    findAllElements(el.shadowRoot.querySelectorAll('*'));
                }
            }
        };
        findAllElements(document.querySelectorAll('*'));
        let hrefs = ems.filter((em: Element & { href?: string }) => {
            return em.localName === "a" && em.href
        }).map((em: Element & { href?: string }) => em.href as string)
        return Array.from(new Set(hrefs));
    }
    async navigate(p: string) {
        await this.goTo(`${this.baseUrl}${p.startsWith("/") ? p : `/${p}`}`)
    }
    async toNflTeamsList() {
        await this.navigate("/nfl")
    }
    async shouldPushTeamHrefWithoutDuplicate(val: string) {
        return this.teamHrefs.every((h) => h.href !== val)
    }
    async gatherTeamLinkItems() {
        let hrefs = await this.page.evaluate(this.collectAllHref)
        for (const a of hrefs) {
            let team = this.testStringNFLTeamMatch(a)
            let shouldPush = await this.shouldPushTeamHrefWithoutDuplicate(a)
            if (team.length === 1 && shouldPush) {
                this.teamHrefs.push(new VividSeatNflTeamPage(a, team[0], this.browser))
            }
            if (team.length > 1) {
                console.log(`The following href found multiple teams:
href: ${a}
teams: ${team.join(",")}`)
            }
        }
    }
    async crawl() {
        await this.toNflTeamsList()
        await this.gatherTeamLinkItems()
        console.log("this.teamHrefs: ", this.teamHrefs)
        // TODO: Obviously remove this when done debugging
        for await (const k of this.teamHrefs.slice(0, 1)) {
            await k.getListingDivs()
            await k.crawlEventPages()
            // await k.close()
        }
    }
}
