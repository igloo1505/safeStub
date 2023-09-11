import AuthWrapper from '#/components/auth/authWrapper'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import React from 'react'



interface ProfilePageProps {
    params: {
        userId: string
    }
}

const ProfilePage = ({ params }: ProfilePageProps) => {
    return (
        <AuthWrapper auth={"authenticated"}>
            <PageContentWrapper>
                <div>Profile Page</div>
            </PageContentWrapper>
        </AuthWrapper>
    )
}


ProfilePage.displayName = "ProfilePage"

/* ProfilePage.auth = { */
/*     role: "admin", */
/*     loading: <LoadingIndicator />, */
/*     unauthorized: "/", */
/* } */


export default ProfilePage;
