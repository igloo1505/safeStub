import { NFLTeamName } from "@prisma/client";
import { Browser, Page } from "puppeteer";
import { VividSeatsEventsPage } from "./vividSeatsEventPage";

export class VividSeatNflTeamPage {
    page: Page | null = null
    eventPages: VividSeatsEventsPage[] = []
    crawlTimeout: number = 5000
    constructor(public href: string, public team: NFLTeamName, public browser: Browser) { }
    async open() {
        this.page = await this.browser.newPage()
        await this.page.goto(this.href)
    }
    async close() {
        await this.page?.close()
    }
    classListToArray(c: Element["classList"]) {
        let cs: string[] = []
        for (var i = 0; i < c.length; i++) {
            let s = c.item(i)
            s && cs.push(s)
        }
        return cs
    }
    async clickShowMoreButton() {
        const ems: Element[] = [];
        const _query = 'button[data-testid]'
        const findAllElements = function(nodes: ReturnType<typeof document.querySelectorAll>) {
            for (let i = 0, el; el = nodes[i]; ++i) {
                ems.push(el)
                if (el.shadowRoot) {
                    findAllElements(el.shadowRoot.querySelectorAll(_query));
                }
            }
        };
        findAllElements(document.querySelectorAll(_query));
        let showMore = ems.find((el) => el.getAttribute("data-testid") === "show-more-btn") as HTMLElement | null
        console.log("showMore: ", showMore)
        if (!showMore) return
        showMore.click()
        let cs: string[] = []
        for (var i = 0; i < showMore.classList.length; i++) {
            let s = showMore.classList.item(i)
            s && cs.push(s)
        }
        const query = `button.${cs.join(".")}`
        let buttons = document.querySelectorAll(query)
        for (var i = 0; i < buttons.length; i++) {
            const btn = buttons.item(i) as HTMLElement
            if (btn) {
                btn.click()
            }
        }
    }
    shouldPushEventsPage(href?: string | null) {
        return href ? this.eventPages.every((h) => h.href !== href) : false
    }
    async getListingItems() {
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
        let aTags = ems.filter((el) => el.getAttribute("data-testid")?.startsWith("production-listing")).map((el) => el.querySelectorAll("a[href]")).flat(3)
        let hrefs: string[] = []
        for (const k of aTags) {
            for (var i = 0; i < k.length; i++) {
                const aTag = k.item(i)
                let href = aTag.getAttribute("href")
                if (href) {
                    hrefs.push(href)
                }
            }
        }
        return hrefs
    }
    async getListingDivs() {
        await this.open()
        await this.page?.evaluate(this.clickShowMoreButton)
        let hrefs = await this.page?.evaluate(this.getListingItems)
        if (!hrefs) {
            console.log(`No hrefs were found in ${this.href}`)
            return
        }
        for (const k of hrefs) {
            if (this.shouldPushEventsPage(k)) {
                this.eventPages.push(new VividSeatsEventsPage(k, this.browser))
            }
        }
    }
    async crawlPage(index: number) {
        return await this.eventPages[index].gatherListings()
    }
    async crawlEventPages(idx: number = 0, _resolve?: () => void) {
        return new Promise<void>(async (resolve) => {
            if (idx === this.eventPages.length - 1) {
                if (_resolve) {
                    return _resolve()
                } else {
                    resolve()
                }
            }
            setTimeout(async () => {
                await this.crawlPage(idx)
                // TODO: Turn this back on when done debugging
                await this.crawlEventPages(idx + 1, resolve)
            }, this.crawlTimeout)
        })
    }
}
