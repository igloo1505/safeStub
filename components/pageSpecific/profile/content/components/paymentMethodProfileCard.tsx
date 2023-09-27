import React from 'react'
import { ProfileContentBaseProps } from './contentBaseProps';
import { UserProfileDetails } from '../../profilePageContainer';
import ProfileItemCard from './cardContainer';



interface PaymentMethodProfileCardProps extends ProfileContentBaseProps {
    user: UserProfileDetails
}

const PaymentMethodProfileCard = ({ className, delay, show, user }: PaymentMethodProfileCardProps) => {
    return (
        <ProfileItemCard
            title="Payment Preferences"
            className={className}
            delay={delay}
            show={show}
        >
            <div className={""}> Payment method stuff here</div>
        </ProfileItemCard>
    )
}


PaymentMethodProfileCard.displayName = "PaymentMethodProfileCard"


export default PaymentMethodProfileCard;
