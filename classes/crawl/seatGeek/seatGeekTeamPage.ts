import { ExternalTicketData, NFLTeamName } from "@prisma/client"
import { SeatGeekEventsPage } from "./seatGeekEventPage"
import { Page, Browser } from "puppeteer"
import { ExternalDataProps } from "../externalTicketData"

export class SeatGeekNflTeamPage {
    page: Page | null = null
    eventPages: SeatGeekEventsPage[] = []
    crawlTimeout: number = 5000
    constructor(public href: string, public team: NFLTeamName, public browser: Browser) {
        console.log(`Created crawl class for ${team} at ${href}`)
    }
    async open() {
        this.page = await this.browser.newPage()
        await this.page.goto(this.href)
    }
    async close() {
        await this.page?.close()
    }
    async getListingItems() {
        const NFLTeamName = {
            Cardinals: 'Cardinals',
            Falcons: 'Falcons',
            Ravens: 'Ravens',
            Bills: 'Bills',
            Panthers: 'Panthers',
            Bengals: 'Bengals',
            Bears: 'Bears',
            Browns: 'Browns',
            Cowboys: 'Cowboys',
            Broncos: 'Broncos',
            Lions: 'Lions',
            Texans: 'Texans',
            Packers: 'Packers',
            Colts: 'Colts',
            Rams: 'Rams',
            Jaguars: 'Jaguars',
            Vikings: 'Vikings',
            Chiefs: 'Chiefs',
            Saints: 'Saints',
            Raiders: 'Raiders',
            Giants: 'Giants',
            Chargers: 'Chargers',
            Eagles: 'Eagles',
            Dolphins: 'Dolphins',
            FourtyNiners: 'FourtyNiners',
            Patriots: 'Patriots',
            Seahawks: 'Seahawks',
            Jets: 'Jets',
            Buccaneers: 'Buccaneers',
            Steelers: 'Steelers',
            Commanders: 'Commanders',
            Titans: 'Titans',
            TBD: 'TBD'
        };
        abstract class TeamRegexAbstract {
            abstract team: string
            abstract regex: RegExp[]
            constructor() {
            }
            abstract testString(s: string, level: "some" | "every"): boolean
        }

        class Team_Cardinals extends TeamRegexAbstract {
            team: string = NFLTeamName.Cardinals
            regex: RegExp[] = [
                new RegExp("Cardinals", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Falcons extends TeamRegexAbstract {
            team: string = NFLTeamName.Falcons
            regex: RegExp[] = [
                new RegExp("Falcons", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Ravens extends TeamRegexAbstract {
            team: string = NFLTeamName.Ravens
            regex: RegExp[] = [
                new RegExp("Ravens", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Bills extends TeamRegexAbstract {
            team: string = NFLTeamName.Bills
            regex: RegExp[] = [
                new RegExp("Bills", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Panthers extends TeamRegexAbstract {
            team: string = NFLTeamName.Panthers
            regex: RegExp[] = [
                new RegExp("Panthers", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Bengals extends TeamRegexAbstract {
            team: string = NFLTeamName.Bengals
            regex: RegExp[] = [
                new RegExp("Bengals", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Bears extends TeamRegexAbstract {
            team: string = NFLTeamName.Bears
            regex: RegExp[] = [
                new RegExp("Bears", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Browns extends TeamRegexAbstract {
            team: string = NFLTeamName.Browns
            regex: RegExp[] = [
                new RegExp("Browns", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Cowboys extends TeamRegexAbstract {
            team: string = NFLTeamName.Cowboys
            regex: RegExp[] = [
                new RegExp("Cowboys", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Broncos extends TeamRegexAbstract {
            team: string = NFLTeamName.Broncos
            regex: RegExp[] = [
                new RegExp("Broncos", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Lions extends TeamRegexAbstract {
            team: string = NFLTeamName.Lions
            regex: RegExp[] = [
                new RegExp("Lions", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Texans extends TeamRegexAbstract {
            team: string = NFLTeamName.Texans
            regex: RegExp[] = [
                new RegExp("Texans", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Packers extends TeamRegexAbstract {
            team: string = NFLTeamName.Packers
            regex: RegExp[] = [
                new RegExp("Packers", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Colts extends TeamRegexAbstract {
            team: string = NFLTeamName.Colts
            regex: RegExp[] = [
                new RegExp("Colts", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Rams extends TeamRegexAbstract {
            team: string = NFLTeamName.Rams
            regex: RegExp[] = [
                new RegExp("Rams", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Jaguars extends TeamRegexAbstract {
            team: string = NFLTeamName.Jaguars
            regex: RegExp[] = [
                new RegExp("Jaguars", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Vikings extends TeamRegexAbstract {
            team: string = NFLTeamName.Vikings
            regex: RegExp[] = [
                new RegExp("Vikings", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Chiefs extends TeamRegexAbstract {
            team: string = NFLTeamName.Chiefs
            regex: RegExp[] = [
                new RegExp("Chiefs", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Saints extends TeamRegexAbstract {
            team: string = NFLTeamName.Saints
            regex: RegExp[] = [
                new RegExp("Saints", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Raiders extends TeamRegexAbstract {
            team: string = NFLTeamName.Raiders
            regex: RegExp[] = [
                new RegExp("Raiders", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Giants extends TeamRegexAbstract {
            team: string = NFLTeamName.Giants
            regex: RegExp[] = [
                new RegExp("Giants", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Chargers extends TeamRegexAbstract {
            team: string = NFLTeamName.Chargers
            regex: RegExp[] = [
                new RegExp("Chargers", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Eagles extends TeamRegexAbstract {
            team: string = NFLTeamName.Eagles
            regex: RegExp[] = [
                new RegExp("Eagles", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Dolphins extends TeamRegexAbstract {
            team: string = NFLTeamName.Dolphins
            regex: RegExp[] = [
                new RegExp("Dolphins", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_FourtyNiners extends TeamRegexAbstract {
            team: string = NFLTeamName.FourtyNiners
            regex: RegExp[] = [
                new RegExp("FourtyNiners", "gi"),
                new RegExp("Niners", "gi"),
                new RegExp("49er", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Patriots extends TeamRegexAbstract {
            team: string = NFLTeamName.Patriots
            regex: RegExp[] = [
                new RegExp("Patriots", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Seahawks extends TeamRegexAbstract {
            team: string = NFLTeamName.Seahawks
            regex: RegExp[] = [
                new RegExp("Seahawks", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Jets extends TeamRegexAbstract {
            team: string = NFLTeamName.Jets
            regex: RegExp[] = [
                new RegExp("Jets", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Buccaneers extends TeamRegexAbstract {
            team: string = NFLTeamName.Buccaneers
            regex: RegExp[] = [
                new RegExp("Buccaneers", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Steelers extends TeamRegexAbstract {
            team: string = NFLTeamName.Steelers
            regex: RegExp[] = [
                new RegExp("Steelers", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }
        class Team_Commanders extends TeamRegexAbstract {
            team: string = NFLTeamName.Commanders
            regex: RegExp[] = [
                new RegExp("Commanders", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }

        class Team_Titans extends TeamRegexAbstract {
            team: string = NFLTeamName.Titans
            regex: RegExp[] = [
                new RegExp("Titans", "gi"),
            ]
            constructor() {
                super()
            }

            testString(s: string, level: "some" | "every" = "some"): boolean {
                return this.regex[level]((r: RegExp) => r.test(s))
            }
        }


        const getNflTeamRegexList = () => {
            return [
                new Team_Cardinals(),
                new Team_Falcons(),
                new Team_Ravens(),
                new Team_Bills(),
                new Team_Panthers(),
                new Team_Bengals(),
                new Team_Bears(),
                new Team_Browns(),
                new Team_Cowboys(),
                new Team_Broncos(),
                new Team_Lions(),
                new Team_Texans(),
                new Team_Packers(),
                new Team_Colts(),
                new Team_Rams(),
                new Team_Jaguars(),
                new Team_Vikings(),
                new Team_Chiefs(),
                new Team_Saints(),
                new Team_Raiders(),
                new Team_Giants(),
                new Team_Chargers(),
                new Team_Eagles(),
                new Team_Dolphins(),
                new Team_FourtyNiners(),
                new Team_Patriots(),
                new Team_Seahawks(),
                new Team_Jets(),
                new Team_Buccaneers(),
                new Team_Steelers(),
                new Team_Commanders(),
                new Team_Titans(),
            ]
        }

        const getMatchingTeamsFromString = (s: string, level: "every" | "some" = "some") => {
            return getNflTeamRegexList().filter((t) => t.testString(s)).map((t) => t.team) as NFLTeamName[]
        }
        const ems: Element[] = [];
        const _query = 'li'
        const findAllElements = function(nodes: ReturnType<typeof document.querySelectorAll>) {
            for (let i = 0, el; el = nodes[i]; ++i) {
                ems.push(el)
                if (el.shadowRoot) {
                    findAllElements(el.shadowRoot.querySelectorAll(_query));
                }
            }
        };
        findAllElements(document.querySelectorAll(_query));
        let aTags = ems.filter((el) => el.classList.toString().includes("EventItem__EventItemWrapper")).map((el) => el.querySelectorAll("a")).flat(3)
        let hrefs: { href: string, event: ExternalDataProps["event"] }[] = []
        for (const k of aTags) {
            for (var i = 0; i < k.length; i++) {
                const aTag = k.item(i)
                let href = aTag.getAttribute("href")
                let _description = aTag.querySelectorAll("p[data-testid='event-item-title']")
                let teams: NFLTeamName[] = []
                let description: string | undefined = undefined
                if (_description.length === 1) {
                    let d = _description.item(0)
                    description = d.innerHTML
                    teams = getMatchingTeamsFromString(d.innerHTML)
                }
                let date: Date | string | undefined = undefined
                let d = aTag.querySelectorAll("p[data-testid='date']")
                let a = aTag.querySelectorAll("p[data-testid='time']")
                let _arena: string | undefined = undefined
                let _location: string | undefined = undefined
                if (d.length === 1 && a.length === 1) {
                    let dt = a.item(0).innerHTML.split("·")
                    date = `${dt[0].trim} ${d.item(0).innerHTML} ${dt[1].trim || ""}`
                }
                let locData = aTag.querySelectorAll("div[data-testid='description']")
                if (locData.length === 1) {
                    let s = locData.item(0).innerHTML.replace(/<span.*span>/gi, "SPLIT").split("SPLIT")
                    if (s.length === 2) {
                        _arena = s[0]
                        _location = s[1]
                    }
                }
                if (href) {
                    hrefs.push({
                        href: href,
                        event: {
                            participants: teams || [],
                            date: date,
                            description: description,
                            arena: _arena,
                            location: _location
                        }
                    })
                }
            }
        }
        return hrefs
    }
    crawlEventPage(idx: number, _resolve: () => void) {
        let p = this.eventPages[idx]
        setTimeout(async () => {
            await p.gatherItems()
            if (p.index === this.eventPages.length - 1) {
                return _resolve()
            } else {
                return this.crawlEventPage(idx + 1, _resolve)
            }
        }
            , this.crawlTimeout)
    }
    async gatherEvents() {
        await this.open()
        let hrefs = await this.page?.evaluate(this.getListingItems)
        if (hrefs) {
            for (const h of hrefs) {
                this.eventPages.push(new SeatGeekEventsPage(h.href, this.href.indexOf(h.href), h.event, this.browser))
            }
        }
        return new Promise<void>(async (resolve) => {
            this.crawlEventPage(0, resolve)
        })
    }
}
