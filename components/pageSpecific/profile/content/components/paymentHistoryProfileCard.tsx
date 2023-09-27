import React, { Suspense } from 'react'
import { UserProfileDetails } from '../../profilePageContainer'
import ProfileItemCard from './cardContainer'
import { ProfileContentBaseProps } from './contentBaseProps'
import PaymentHistoryTable from './paymentHistoryTable'



interface PaymentHistoryProfileCardProps extends ProfileContentBaseProps {
    user: UserProfileDetails
}


const PaymentHistoryProfileCard = ({ user, className, delay, show }: PaymentHistoryProfileCardProps) => {
    return (
        <ProfileItemCard
            title="Payment History"
            className={className}
            delay={delay}
            show={show}
        >
            <PaymentHistoryTable
                transactionHistory={user?.purchaseHistory}
            />
        </ProfileItemCard>
    )
}


PaymentHistoryProfileCard.displayName = "PaymentHistoryProfileCard"


export default PaymentHistoryProfileCard;
