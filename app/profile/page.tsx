import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import ProfilePageContainer from '#/components/pageSpecific/profile/profilePageContainer'
import { serverClient } from '#/trpc/serverClient'
import { redirect } from 'next/navigation'
import React from 'react'



interface ProfilePageContentProps {

}

const ProfilePageContent = async (props: ProfilePageContentProps) => {
    const session = await getServerSession()
    if (!session?.user.id) redirect("/auth/signin")
    const user = await serverClient.getUserProfile(session.user.id)
    if (!user) return redirect("/api/auth")
    return (
        <PageContentWrapper classes={{
            body: "py-0",
            footer: "mt-0"
        }}>
            <ProfilePageContainer user={user} />
        </PageContentWrapper>
    )
}


ProfilePageContent.displayName = "ProfilePageContent"


export default ProfilePageContent;
