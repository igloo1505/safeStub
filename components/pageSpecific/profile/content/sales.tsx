import clsx from 'clsx'
import React from 'react'
import { UserProfileDetails } from '../profilePageContainer'
import SalesByLineChart from './components/salesByMonthLineChart'
import AwaitingTransferCard from './components/awaitingTransferCard'



interface SalesProfileContentProps {
    show: boolean
    sales: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold']
    userId: string
}

const SalesProfileContent = ({ show, userId, sales }: SalesProfileContentProps) => {
    return (
        <div className={clsx("w-full h-fit flex-col justify-start", show ? "flex" : "hidden")}>
            <SalesByLineChart sales={sales} />
            <AwaitingTransferCard
                delay={150}
                show={show}
                userId={userId}
                className="group-[.content-profile]/profileContainer:opacity-100 group-[.content-profile]/profileContainer:scale-100 my-4 w-full overflow-x-auto @container/table"
            />
        </div>
    )
}


SalesProfileContent.displayName = "SalesProfileContent"


export default SalesProfileContent;
