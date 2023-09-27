import type { serverClient } from '#/trpc/serverClient'
import React from 'react'
import ProfileSidePanel from './sidePanel'
import SidePanelContainer from './sidePanelContainer'
import ProfileContent from './content/profile'
import OrdersProfileContent from './content/orders'
import SalesProfileContent from './content/sales'
import ActiveListingsProfileContent from './content/activeListings'
import PaymentsProfileContent from './content/payments'
import SettingsProfileContent from './content/settings'
import { ProfileActiveType } from '#/types/profile'
import "#/styles/profile.scss"
import { activeTransactionStatus } from '#/lib/formatting/formatPaymentHistoryForTable'
export type UserProfileDetails = Awaited<ReturnType<typeof serverClient.getUserProfile>>


interface ProfilePageContainerProps {
    user: UserProfileDetails
    type: ProfileActiveType
}


const ProfilePageContainer = ({ user, type }: ProfilePageContainerProps) => {
    const activeListings = user?.purchaseHistory?.sold ? user?.purchaseHistory?.sold.filter((t) => activeTransactionStatus.indexOf(t.status) >= 0) : []
    let totalEstimatedPayout = 0
    for (const k of activeListings) {
        totalEstimatedPayout += k.payout
    }
    return (
        <div className={"w-screen h-fit"}>
            <SidePanelContainer>
                <ProfileSidePanel />
                <div className={"w-full h-full flex flex-col justify-start items-center px-6 py-4 group/profileContainer overflow-y-auto"} id="profile-content-container">
                    <ProfileContent user={user} show={type === "profile"} />
                    <OrdersProfileContent show={type === "orders"} />
                    <SalesProfileContent show={type === "sales"} />
                    <ActiveListingsProfileContent
                        show={type === "listings"}
                        nActiveListings={activeListings.length}
                        totalEstimatedPayout={totalEstimatedPayout}
                        activeListings={activeListings}
                    />
                    <PaymentsProfileContent user={user} show={type === "payments"} />
                    <SettingsProfileContent show={type === "settings"} />
                </div>
            </SidePanelContainer>
        </div>
    )
}


ProfilePageContainer.displayName = "ProfilePageContainer"


export default ProfilePageContainer;
