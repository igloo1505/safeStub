import { getServerSession } from '#/actions/server/auth'
import { redirect } from 'next/navigation'
import React from 'react'



interface ProfilePageContentProps {

}

const ProfilePageContent = async (props: ProfilePageContentProps) => {
    const session = await getServerSession()
    if (!session?.user.id) redirect("/auth/signin")
    return (
        <div></div>
    )
}


ProfilePageContent.displayName = "ProfilePageContent"


export default ProfilePageContent;
