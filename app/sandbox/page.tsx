import PageContentWrapper from '#/components/layout/pageContentWrapper';
import SeatingChart from '#/components/sales/seating';
import React from 'react'



interface SandboxDevelopmentPageProps {

}

const SandboxDevelopmentPage = (props: SandboxDevelopmentPageProps) => {
    return (
        <PageContentWrapper>
            <SeatingChart />
        </PageContentWrapper>
    )
}


SandboxDevelopmentPage.displayName = "SandboxDevelopmentPage"


export default SandboxDevelopmentPage;
