import { formatDateShort } from '#/lib/formatting/dates'
import { getMatchingTeamsFromString } from '#/lib/queryAndSorting/nflTeamRegex'
import { NFLTeamName } from '@prisma/client'
import path from 'path'
import puppeteer, { Browser, Page, Puppeteer, PuppeteerLaunchOptions, WaitForSelectorOptions } from 'puppeteer'


export class Crawler {
    browser: Browser = null!
    page: Page = null!
    constructor() {
    }

    async init(opts: PuppeteerLaunchOptions = {}) {
        this.browser = await puppeteer.launch(opts)
        this.page = await this.browser.newPage()
    }
    async getElement(selector: string, opts: WaitForSelectorOptions = {}) {
        return await this.page.waitForSelector(selector, opts)
    }
    async close() {
        await this.browser.close()
    }
    async goTo(p: string) {
        await this.page.goto(p)
    }
    async screenshot() {
        await this.page.screenshot({ path: path.join(process.cwd(), `crawlScreenShots`, `${formatDateShort(new Date())}.png`) })
    }
    testStringNFLTeamMatch(s: string) {
        return getMatchingTeamsFromString(s)
    }
}
