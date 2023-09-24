import React from 'react'
import type data from "#/data/content/help/helpCategoryMap.json"
import { allHelp } from '#/.contentlayer/generated/index.mjs'
import HelpCenterSearchResultCard from '#/components/pageSpecific/helpCenter/helpCenterSearchResultCard'
import { Help } from '#/.contentlayer/generated'
import PageContentWrapper from '#/components/layout/pageContentWrapper'

interface HelpCenterCategoryListProps {
    params: {
        category: keyof typeof data
    }
}

const HelpCenterCategoryList = ({ params: { category } }: HelpCenterCategoryListProps) => {
    const docs = allHelp.filter((h) => h.category === category)
    return (
        <PageContentWrapper>
            <div className={"w-5/6 flex flex-col gap-4"}>{docs.map((d) => {
                return <HelpCenterSearchResultCard key={`search-help${d._id}`} item={d as Help} />
            })}</div>
        </PageContentWrapper>
    )
}


HelpCenterCategoryList.displayName = "HelpCenterCategoryList"


export default HelpCenterCategoryList;
