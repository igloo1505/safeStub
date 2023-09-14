import PageContentWrapper from '#/components/layout/pageContentWrapper'
import { NFLTeamName } from '@prisma/client'
import React from 'react'


interface TeamSpecificPageProps {
    params: {
        teamName: NFLTeamName
    }
}



const TeamSpecificPage = (props: TeamSpecificPageProps) => {
    return (
        <PageContentWrapper>
            <div className={""}>
                <div className={""}>
                    Handle Team specific lists here
                </div>
            </div>
        </PageContentWrapper>
    )
}


TeamSpecificPage.displayName = "TeamSpecificPage"


export default TeamSpecificPage;
