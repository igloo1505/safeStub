import PageContentWrapper from '#/components/layout/pageContentWrapper';
import React from 'react'



interface SettingsPageProps {

}

const SettingsPage = (props: SettingsPageProps) => {
    return (
        <PageContentWrapper>
            <div className={""}>
                Settings Page
            </div>
        </PageContentWrapper>
    )
}


SettingsPage.displayName = "SettingsPage"


export default SettingsPage;
