import { serverClient } from '#/trpc/serverClient'
import React from 'react'
import ProfileSidePanel from './sidePanel'
import SidePanelContainer from './sidePanelContainer'

export type UserProfileDetails = Awaited<ReturnType<typeof serverClient.getUserProfile>>


interface ProfilePageContainerProps {
    user: UserProfileDetails
}

const ProfilePageContainer = ({ user }: ProfilePageContainerProps) => {
    return (
        <div className={"w-screen h-fit"}>
            <SidePanelContainer>
                <ProfileSidePanel />
                <div className={"w-full h-full flex flex-col justify-center items-center px-6 py-4"}>
                    Content here
                </div>
            </SidePanelContainer>
        </div>
    )
}


ProfilePageContainer.displayName = "ProfilePageContainer"


export default ProfilePageContainer;
