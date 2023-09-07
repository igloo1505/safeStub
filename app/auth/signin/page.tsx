import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import GoogleAuthButton from '#/components/navigation/authButtons/google'
import FacebookAuthButton from '#/components/navigation/authButtons/facebook'
import SignupCard from '#/components/auth/signupCard'
import PageContentWrapper from '#/components/layout/pageContentWrapper'


interface SigninPageProps {

}

const ButtonMap = {
    google: GoogleAuthButton,
    facebook: FacebookAuthButton
}

const SigninPage = async (props: SigninPageProps) => {
    const providers = await getProviders()
    console.log("providers: ", providers)
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
