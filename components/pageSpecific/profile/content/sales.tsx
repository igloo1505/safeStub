import clsx from 'clsx'
import React from 'react'
import { UserProfileDetails } from '../profilePageContainer'
import SalesByLineChart from './components/salesByMonthLineChart'
import AwaitingTransferCard from './components/awaitingTransferCard'
import { PendingTicketList } from '#/types/query'



interface SalesProfileContentProps {
    show: boolean
    sales: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold']
    pendingTickets: Promise<PendingTicketList>
}


const SalesProfileContent = ({ show, sales, pendingTickets }: SalesProfileContentProps) => {
    return (
        <div className={clsx("w-full h-fit flex-col justify-start gap-4", show ? "flex" : "hidden")}>
            <AwaitingTransferCard
                delay={150}
                show={show}
                pendingTickets={pendingTickets}
                className="group-[.content-profile]/profileContainer:opacity-100 group-[.content-profile]/profileContainer:scale-100 w-full overflow-x-auto @container/table"
            />
            <SalesByLineChart sales={sales} />
        </div>
    )
}


SalesProfileContent.displayName = "SalesProfileContent"


export default SalesProfileContent;
