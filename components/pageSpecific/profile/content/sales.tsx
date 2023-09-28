import clsx from 'clsx'
import React from 'react'
import { UserProfileDetails } from '../profilePageContainer'
import SalesByLineChart from './components/salesByMonthLineChart'



interface SalesProfileContentProps {
    show: boolean
    sales: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold']
}

const SalesProfileContent = ({ show, sales }: SalesProfileContentProps) => {
    return (
        <div className={clsx("", show ? "flex" : "hidden")}>
            <SalesByLineChart sales={sales} />
        </div>
    )
}


SalesProfileContent.displayName = "SalesProfileContent"


export default SalesProfileContent;
