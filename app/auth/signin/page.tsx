import React from 'react'
import SignupCard from '#/components/auth/signupCard'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import { redirect } from 'next/navigation'
import { getServerSession } from '#/actions/server/auth'


interface SigninPageProps {

}


const SigninPage = async (props: SigninPageProps) => {
    const session = await getServerSession()
    if (session) {
        if (session?.user?.id) {
            redirect(`/profile/${session.user.id}`)
        } else {
            redirect("/")
        }
    }
    return (
        <PageContentWrapper>
            <div className={"w-full h-full flex justify-center items-center"}>
                <SignupCard />
            </div>
        </PageContentWrapper>
    )
}


SigninPage.displayName = "SigninPage"


export default SigninPage;
