import AdminPageContent from '#/components/admin/adminPageContent';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import React from 'react'

const AdminPage = () => {
    return (
        <PageContentWrapper>
            <AdminPageContent />
        </PageContentWrapper>
    )
}


AdminPage.displayName = "AdminPage"


export default AdminPage;
