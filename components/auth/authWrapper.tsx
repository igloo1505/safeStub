import React from 'react'
import { ROLE } from '@prisma/client'
import { getServerSession } from 'next-auth'



interface AuthWrapperProps {
    children: React.ReactNode
    auth: ROLE[] | "authenticated"
}


const AuthWrapper = async ({ children, auth }: AuthWrapperProps) => {

    const session = await getServerSession()
    console.log("session: ", session)

    /* TODO: Handle role auth here */

    return <>{children}</>
}


AuthWrapper.displayName = "AuthWrapper"


export default AuthWrapper;
