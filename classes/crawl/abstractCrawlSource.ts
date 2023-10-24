import { EXTERNALSOURCE } from '@prisma/client'
import { ExternalTicketData } from './externalTicketData'
import { Crawler } from './crawler'


interface AuthProps {
    username?: string
    password?: string
}

export abstract class CrawlSource extends Crawler {
    abstract baseUrl: string
    abstract name: EXTERNALSOURCE
    abstract auth?: AuthProps
    abstract ticketData: ExternalTicketData[]
    constructor() {
        super()
    }
    abstract crawl(): Promise<void>
}
