import TicketStatusTable from '#/components/admin/statusTable/table'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import AdminNotifications from '#/components/notifications/adminNotifications'
import { isAdminServer } from '#/lib/auth/isAdminServer'
import { serverClient } from '#/trpc/serverClient'
import { redirect } from 'next/navigation'
import React from 'react'



interface AdminTicketStatusPageProps {

}

const AdminTicketStatusPage = async (props: AdminTicketStatusPageProps) => {
    const isAdmin = await isAdminServer()
    if (!isAdmin) {
        return redirect("/")
    }

    const tickets = await serverClient.getAllPendingTickets()

    return (
        <>
            <AdminNotifications />
            <PageContentWrapper>
                <div className={"w-full h-full flex flex-col justify-center items-center"}>
                    <TicketStatusTable
                        tickets={tickets}
                    />
                </div>
            </PageContentWrapper>
        </>
    )
}


AdminTicketStatusPage.displayName = "AdminTicketStatusPage"


export default AdminTicketStatusPage;
