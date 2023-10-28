import { EXTERNALSOURCE } from "@prisma/client";
import { CrawlSource } from "../abstractCrawlSource";
import { ExternalTicketData } from "../externalTicketData";
import { SeatGeekNflTeamPage } from "./seatGeekTeamPage";

export class SeatGeek extends CrawlSource {
    baseUrl: string = "https://www.seatgeek.com"
    name: EXTERNALSOURCE = "seatGeek"
    auth = undefined
    ticketData: ExternalTicketData[] = []
    teamHrefs: SeatGeekNflTeamPage[] = []
    crawlTimeout: number = 10000
    hrefList: string[] = []
    constructor() {
        super()
    }
    async navigate(p: string) {
        await this.goTo(`${this.baseUrl}${p.startsWith("/") ? p : `/${p}`}`)
    }
    async toNflTeamsList() {
        await this.navigate("/nfl-tickets")
    }

    async shouldPushTeamHrefWithoutDuplicate(val: string) {
        return this.teamHrefs.every((h) => h.href !== val)
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
            return em.localName === "a" && em.href && em.classList.toString().includes("Team__TeamCard")
        }).map((em: Element & { href?: string }) => em.href as string)
        return Array.from(new Set(hrefs));
    }

    async gatherTeamLinkItems() {
        let hrefs = await this.page.evaluate(this.collectAllHref)
        for (const a of hrefs) {
            let team = this.testStringNFLTeamMatch(a)
            console.log("team: ", team)
            let shouldPush = await this.shouldPushTeamHrefWithoutDuplicate(a)
            if (team.length === 1 && shouldPush) {
                this.teamHrefs.push(new SeatGeekNflTeamPage(a, team[0], this.browser))
            }
            if (team.length > 1) {
                console.log(`The following href found multiple teams:
href: ${a}
teams: ${team.join(",")}`)
            }
        }
    }
    async gatherEventData(idx: number, resolve: () => void) {
        let k = this.teamHrefs[idx]
        setTimeout(async () => {
            await k.gatherEvents()
            if (idx === this.teamHrefs.length - 1) {
                return resolve()
            } else {
                // this.gatherEventData(idx + 1, resolve)
            }
        }, this.crawlTimeout)
    }
    async crawl() {
        await this.toNflTeamsList()
        await this.gatherTeamLinkItems()
        this.hrefList = this.teamHrefs.map((t) => t.href)
        // TEMPORARY: Remove this slice function when done with debugging.
        return new Promise<void>(async (resolve) => {
            return await this.gatherEventData(0, resolve)
        })
    }
}
