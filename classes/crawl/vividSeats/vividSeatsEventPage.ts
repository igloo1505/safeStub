import { getMatchingTeamsFromString } from "#/lib/queryAndSorting/nflTeamRegex";
import { Browser, Page } from "puppeteer";
import { ExternalDataProps, ExternalTicketData } from "../externalTicketData";

export class VividSeatsEventsPage {
    baseUrl: string = "https://www.vividseats.com"
    ticketData: ExternalTicketData[] = []
    page: Page | null = null
    constructor(public href: string, public browser: Browser) {
        if (!this.href.includes(this.baseUrl) && this.href.startsWith("/")) {
            this.href = `${this.baseUrl}${this.href}`
        }
        console.log(`Creating new event page at: ${this.href}`)
    }
    async open() {
        this.page = await this.browser.newPage()
        await this.page.goto(this.href)
    }
    async close() {
        await this.page?.close()
    }
    async getListingContainerQuery() {
        const ems: Element[] = [];
        const _query = 'div[data-testid]'
        const findAllElements = function(nodes: ReturnType<typeof document.querySelectorAll>) {
            for (let i = 0, el; el = nodes[i]; ++i) {
                ems.push(el)
                if (el.shadowRoot) {
                    findAllElements(el.shadowRoot.querySelectorAll(_query));
                }
            }
        };
        findAllElements(document.querySelectorAll(_query));

        const parseRowEm = (el: HTMLDivElement): ExternalDataProps => {
            let _data: ExternalDataProps = {
                source: "vividSeats",
                price: -1,
                event: {
                    participants: []
                }
            }
            let divs = el.querySelectorAll("span")
            for (var i = 0; i < divs.length; i++) {
                const item = divs.item(i)
                if (item.classList.toString().includes("styles_priceAmount")) {
                    _data.price = parseFloat(item.innerHTML.replace("$", ""))
                }
            }
            let ps = el.querySelectorAll("p")
            for (var i = 0; i < ps.length; i++) {
                const item = ps.item(i)
                let content = item.innerHTML.split("•")
                let sr: { seat?: string, section?: string, row?: string } = {}
                content.forEach((l, i) => {
                    let line = l.toLowerCase()
                    if (Boolean(line.includes("sr") && i === 0) || line.includes("section")) {
                        sr.section = line.replace("sr", "").replace("section", "").trim()
                    } else if (line.includes("row")) {
                        sr.row = line.replace("row", "").replace("sr", "").trim()
                    }
                })
                if (sr.section && sr.row) {
                    _data = { ..._data, ...sr }
                }
            }
            console.log("_data: ", _data)
            return _data
        }
        const classListToArray = (c: Element["classList"]) => {
            let cs: string[] = []
            for (var i = 0; i < c.length; i++) {
                let s = c.item(i)
                s && cs.push(s)
            }
            return cs
        }

        let items: HTMLDivElement[] = []
        let filtered = ems.filter((el) => el.getAttribute("data-testid") === "listings-container")
        console.log("filtered.length: ", filtered.length)
        for (const k of filtered) {
            let c = k.querySelectorAll("div")
            for (var i = 0; i < c.length; i++) {
                const item = c.item(i)
                console.log("item.classList.toString(): ", item.classList.toString())
                if (item.classList.toString().includes("listingRowContainer")) {
                    items.push(item)
                }
            }
        }
        console.log("items.length: ", items.length)
        let data = items.map((l) => parseRowEm(l))
        return data
    }
    async gatherListings() {
        await this.open()
        let itemData = await this.page?.evaluate(this.getListingContainerQuery)
        console.log("itemData: ", itemData)
    }
}
