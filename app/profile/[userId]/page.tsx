import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import ProfilePageContainer from '#/components/pageSpecific/profile/profilePageContainer'
import { toSignin } from '#/lib/auth/authValidators'
import { serverClient } from '#/trpc/serverClient'
import { ProfileActiveType } from '#/types/profile'
import { redirect } from 'next/navigation'
import React from 'react'



interface ProfilePageProps {
    params: {
        userId: string
    }
    searchParams: {
        t: ProfileActiveType
    }
}

const ProfilePage = async ({ params: { userId }, searchParams }: ProfilePageProps) => {
    const session = await getServerSession()
    /* NOTE: Show public profile here at some point */
    if (!session?.user.id || session.user.id !== userId) {
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
            <ProfilePageContainer
                user={user}
                type={searchParams.t || "profile"}
            />
        </PageContentWrapper>
    )
}


ProfilePage.displayName = "ProfilePage"


export default ProfilePage;
