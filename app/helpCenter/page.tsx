import PageContentWrapper from '#/components/layout/pageContentWrapper';
import React from 'react'
import data from "#/data/content/help/helpCategoryMap.json"
import HelpCenterSearchBar from '#/components/pageSpecific/helpCenter/searchInput';
import HelpCenterCategoryCard from '#/components/pageSpecific/helpCenter/helpCategoryCard';


interface HelpCenterPageProps {

}

const HelpCenterPage = (props: HelpCenterPageProps) => {
    return (
        <PageContentWrapper>
            <div className={"w-5/6 flex flex-col justify-start items-center"}>
                <div className={"w-full"}>
                    <HelpCenterSearchBar className={"max-w-screen-sm w-5/6 md:w-[400px]"} />
                </div>
                <div className={"mt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                    {Object.keys(data).map((k) => {
                        return <HelpCenterCategoryCard k={k as keyof typeof data} key={`help-${k}`} category={data[k as keyof typeof data]} />
                    })}
                </div>
            </div>
        </PageContentWrapper>
    )
}


HelpCenterPage.displayName = "HelpCenterPage"


export default HelpCenterPage;
