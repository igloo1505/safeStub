import ExpensesTable from '#/components/admin/expensesTable';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import React from 'react'



interface ExpensesPageProps {

}

const ExpensesPage = (props: ExpensesPageProps) => {
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
