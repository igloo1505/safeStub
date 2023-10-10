import ExpensesTable from '#/components/admin/expensesTable';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import { isAdminServer } from '#/lib/auth/isAdminServer';
import { redirect } from 'next/navigation';
import React from 'react'


const ExpensesPage = async () => {
    const isAdmin = await isAdminServer()
    if (!isAdmin) {
        return redirect("/")
    }
    return (
        <PageContentWrapper>
            <div className={"w-5/6 max-w-screen-xl"}>
                <ExpensesTable />
            </div>
        </PageContentWrapper>
    )
}


ExpensesPage.displayName = "ExpensesPage"


export default ExpensesPage;
