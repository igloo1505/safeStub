"use client"
import React from 'react'
import Icon from "#/assets/icons/google"
import AuthButtonWrapper from './authButtonWrapper'
import { signIn } from "next-auth/react"

interface GoogleAuthButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

    providerId: string
}

const GoogleAuthButton = ({ providerId, ...props }: GoogleAuthButtonProps) => {
    return (
        <a href={"/api/auth/signin"} onClick={(e) => {
            e.preventDefault()
            signIn(providerId)
        }}>
            <AuthButtonWrapper Icon={Icon} label="Google" {...props} />
        </a>
    )
}


GoogleAuthButton.displayName = "GoogleAuthButton"


export default GoogleAuthButton;
