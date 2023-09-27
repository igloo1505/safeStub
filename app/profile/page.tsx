import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import ProfilePageContainer from '#/components/pageSpecific/profile/profilePageContainer'
import { toSignin } from '#/lib/auth/authValidators'
import { serverClient } from '#/trpc/serverClient'
import { ProfileActiveType } from '#/types/profile'
import React from 'react'



interface ProfilePageContentProps {
    searchParams: {
        t?: ProfileActiveType
    }
}

const ProfilePageContent = async (props: ProfilePageContentProps) => {
    const session = await getServerSession()
    if (!session?.user.id) {
        return toSignin(true)
    }
    const user = await serverClient.getUserProfile(session.user.id)
    if (!user) {
        return toSignin(true)
    }
    return (
        <PageContentWrapper classes={{
            body: "pb-0 pt-0",
            footer: "mt-0"
        }}>
            <ProfilePageContainer user={user} type={props.searchParams.t || "profile"} />
        </PageContentWrapper>
    )
}


ProfilePageContent.displayName = "ProfilePageContent"


export default ProfilePageContent;
