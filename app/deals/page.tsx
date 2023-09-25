import PageContentWrapper from '#/components/layout/pageContentWrapper';
import { serverClient } from '#/trpc/serverClient';
import React from 'react'



interface GreatDealsPageProps {

}

const GreatDealsPage = async (props: GreatDealsPageProps) => {
    const deals = await serverClient.findGreatDeals()
    return (
        <PageContentWrapper>
            Highlighting what appears to be good deals will go here.
        </PageContentWrapper>
    )
}


GreatDealsPage.displayName = "GreatDealsPage"


export default GreatDealsPage;
