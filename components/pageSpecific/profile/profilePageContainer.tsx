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

export type UserProfileDetails = Awaited<ReturnType<typeof serverClient.getUserProfile>>


interface ProfilePageContainerProps {
    user: UserProfileDetails
}

const ProfilePageContainer = ({ user }: ProfilePageContainerProps) => {
    return (
        <div className={"w-screen h-fit"}>
            <SidePanelContainer>
                <ProfileSidePanel />
                <div className={"w-full h-full flex flex-col justify-center items-center px-6 py-4 group/profileContainer content-profile"} id="profile-content-container">
                    <ProfileContent />
                    <OrdersProfileContent />
                    <SalesProfileContent />
                    <ActiveListingsProfileContent />
                    <PaymentsProfileContent />
                    <SettingsProfileContent />
                </div>
            </SidePanelContainer>
        </div>
    )
}


ProfilePageContainer.displayName = "ProfilePageContainer"


export default ProfilePageContainer;
