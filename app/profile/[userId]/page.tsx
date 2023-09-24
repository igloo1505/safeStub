import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import ProfilePageContainer from '#/components/pageSpecific/profile/profilePageContainer'
import { serverClient } from '#/trpc/serverClient'
import { redirect } from 'next/navigation'
import React from 'react'



interface ProfilePageProps {
    params: {
        userId: string
    }
}

const ProfilePage = async ({ params: { userId } }: ProfilePageProps) => {
    const session = await getServerSession()
    /* NOTE: Show public profile here at some point */
    if (!session?.user.id || session.user.id !== userId) redirect("/auth/signin")
    const user = await serverClient.getUserProfile(session.user.id)
    if (!user) return redirect("/api/auth")
    return (
        <PageContentWrapper classes={{
            body: "pb-0 pt-0",
            footer: "mt-0"
        }}>
            <ProfilePageContainer user={user} />
        </PageContentWrapper>
    )
}


ProfilePage.displayName = "ProfilePage"


export default ProfilePage;
