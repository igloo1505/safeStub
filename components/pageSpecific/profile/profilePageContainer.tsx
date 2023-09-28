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
import "#/styles/profile.scss"
import { activeTransactionStatus } from '#/lib/formatting/formatPaymentHistoryForTable'
import { ProfilePageContainerProps } from './profileNavItems'
import ProfileTopNav from './profileTopNav'
export type UserProfileDetails = Awaited<ReturnType<typeof serverClient.getUserProfile>>



/* <ProfileSidePanel /> */

const ProfilePageContainer = ({ user, type }: ProfilePageContainerProps) => {
    const activeListings = user?.purchaseHistory?.sold ? user?.purchaseHistory?.sold.filter((t) => activeTransactionStatus.indexOf(t.status) >= 0) : []
    let totalEstimatedPayout = 0
    for (const k of activeListings) {
        totalEstimatedPayout += k.payout
    }
    return (
        <div className={"w-full lg:w-11/12 h-fit"}>
            <SidePanelContainer>
                <ProfileTopNav />
                <div className={"w-full h-full flex flex-col justify-start items-center px-6 py-4 group/profileContainer overflow-y-auto"} id="profile-content-container">
                    <ProfileContent user={user} show={type === "profile"} />
                    <OrdersProfileContent show={type === "orders"} />
                    <SalesProfileContent show={type === "sales"} sales={user?.purchaseHistory?.sold || []} />
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
