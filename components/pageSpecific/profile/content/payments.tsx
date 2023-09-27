import clsx from 'clsx'
import React from 'react'
import PaymentMethodProfileCard from './components/paymentMethodProfileCard'
import { UserProfileDetails } from '../profilePageContainer'
import PaymentHistoryProfileCard from './components/paymentHistoryProfileCard'



interface PaymentsProfileContentProps {
    show: boolean
    user: UserProfileDetails
}

const PaymentsProfileContent = ({ show, user }: PaymentsProfileContentProps) => {
    return (
        <div className={clsx("w-full h-fit grid grid-rows-2 gap-4", show ? "grid" : "hidden")}>
            <div className={"grid grid-cols-1 lg:grid-cols-[1fr_1fr]"}>
                <PaymentMethodProfileCard
                    delay={50}
                    show={show}
                    user={user}
                />
            </div>
            <PaymentHistoryProfileCard
                delay={150}
                show={show}
                user={user}
            />
        </div>
    )
}


PaymentsProfileContent.displayName = "PaymentsProfileContent"


export default PaymentsProfileContent;
