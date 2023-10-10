import React from 'react'
import ExpenseForm from './expenseForm'
import UserAccessTable from './userAccess'
import { serverClient } from '#/trpc/serverClient'
import AdminLinks from './adminLinks'






const AdminPageContent = async () => {
    const users = await serverClient.getUsers({ skip: 0, take: 100 })
    return (
        <div className={"w-full flex flex-col justify-center items-center"}>
            <div className={"text-foreground w-5/6 max-w-screen-md"}>
                <div className="">
                    <div className="border-b border-gray-900/10 dark:border-gray-600/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">Settings</h2>
                    </div>
                </div>
                <ExpenseForm />
            </div>
            <div className={"px-8 w-full"}>
                User Access
                {users && <UserAccessTable users={users} />}
            </div>
            <AdminLinks />
        </div>
    )
}


AdminPageContent.displayName = "AdminPageContent"


export default AdminPageContent;
