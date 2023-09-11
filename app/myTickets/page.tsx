import PageContentWrapper from '#/components/layout/pageContentWrapper'
import React from 'react'



interface MyTicketsPageProps {

}

const MyTicketsPage = (props: MyTicketsPageProps) => {
    return (
        <PageContentWrapper>
            <div>My Tickets Page</div>
        </PageContentWrapper>
    )
}


MyTicketsPage.displayName = "MyTicketsPage"


export default MyTicketsPage;
