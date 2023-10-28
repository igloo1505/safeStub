import { Page, Browser } from "puppeteer"
import { ExternalDataProps, ExternalTicketData } from "../externalTicketData"

export class SeatGeekEventsPage {
    baseUrl: string = "https://www.seatgeek.com"
    ticketData: ExternalTicketData[] = []
    page: Page | null = null
    constructor(public href: string, public index: number, public eventData: ExternalDataProps["event"], public browser: Browser) {
        if (!this.href.includes(this.baseUrl) && this.href.startsWith("/")) {
            this.href = `${this.baseUrl}${this.href}`
        }
        console.log(`Creating new event page at: ${this.href}`)
    }
    async getItemData(eventData: ExternalDataProps["event"]) {
        let items = document.querySelectorAll("div[data-testid='listing-item']")
        let data: ExternalDataProps[] = []
        if (items) {
            let d: ExternalDataProps = {
                source: "seatGeek",
                event: this.eventData,
                price: -1
            }
            for (var i = 0; i < items.length; i++) {
                const k = items.item(i)
                let p = k.querySelectorAll("h3[data-testid='price']")
                if (p.length === 1) {
                    let span = p.item(0).querySelectorAll("span")
                    for (var l = 0; l < span.length; l++) {
                        const _span = span.item(l)
                        if (_span.classList.toString().includes("PriceProminentListingInfo__Price")) {
                            d.price = parseFloat(_span.innerHTML.replace(/[a-zA-Z\s\,\$]/gi, ""))
                        }
                    }
                }
                let locData = k.querySelectorAll("p[data-testid='section']")
                if (locData.length === 1) {
                    let secrow = locData.item(0).innerHTML.split(",").map((s) => s.toLowerCase().trim())
                    if (secrow.length === 2) {
                        d.section = secrow[0].replace("section", "").trim()
                        d.row = secrow[1].replace("row", "").trim()
                    }
                }
            }
            data.push(d)
        }
        return data
    }
    async gatherItems() {
        this.page = await this.browser.newPage()
        this.page.goto(`${this.baseUrl}${this.href}`)
        let itemData = await this.page?.evaluate(() => this.getItemData(this.eventData))
    }
}
