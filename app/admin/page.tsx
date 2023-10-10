import AdminPageContent from '#/components/admin/adminPageContent';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import { isAdminServer } from '#/lib/auth/isAdminServer';
import { redirect } from 'next/navigation';
import React from 'react'

const AdminPage = async () => {
    const isAdmin = await isAdminServer()
    if (!isAdmin) {
        return redirect("/")
    }
    return (
        <PageContentWrapper>
            <AdminPageContent />
        </PageContentWrapper>
    )
}


AdminPage.displayName = "AdminPage"


export default AdminPage;
