import { Help } from '#/.contentlayer/generated'
import { allHelp } from '#/.contentlayer/generated/index.mjs'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import HelpCenterSearchResultCard from '#/components/pageSpecific/helpCenter/helpCenterSearchResultCard'
import React from 'react'



interface HelpCenterSearchPageProps {
    params: {
        query: string
    }
}

const HelpCenterSearchPage = ({ params: { query } }: HelpCenterSearchPageProps) => {
    const docs = allHelp.filter((d) => {
        let tags = d.tags ? d.tags.map((t) => t.toLowerCase()) : []
        if (tags.indexOf(query.toLowerCase()) >= 0) return true
        let reg = new RegExp(query, "gi")
        if (reg.test(d.title)) return true
        if (reg.test(d.body.raw)) return true
        return false
    })
    return (
        <PageContentWrapper>
            <div className={"w-5/6 flex flex-col gap-4"}>{docs.map((d) => {
                return <HelpCenterSearchResultCard key={`search-help${d._id}`} item={d as Help} />
            })}</div>
        </PageContentWrapper>
    )
}


HelpCenterSearchPage.displayName = "HelpCenterSearchPage"


export default HelpCenterSearchPage;
