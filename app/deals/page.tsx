import PageContentWrapper from '#/components/layout/pageContentWrapper';
import { serverClient } from '#/trpc/serverClient';
import { BasicSearchParams } from '#/utils/server/searchEvents';
import React from 'react'



interface GreatDealsPageProps {
    searchParams: BasicSearchParams
}


const GreatDealsPage = async ({ searchParams: { page } }: GreatDealsPageProps) => {
    const deals = await serverClient.findGreatDeals({ page })
    return (
        <PageContentWrapper>
            Highlighting what appears to be good deals will go here.
        </PageContentWrapper>
    )
}


GreatDealsPage.displayName = "GreatDealsPage"


export default GreatDealsPage;
