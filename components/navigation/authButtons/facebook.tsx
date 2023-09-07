"use client"
import React from 'react'
import AuthButtonWrapper from './authButtonWrapper';
import Icon from "#/assets/icons/facebook"
import { signIn } from "next-auth/react"

interface FacebookAuthButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    providerId: string
}

const FacebookAuthButton = ({ providerId, ...props }: FacebookAuthButtonProps) => {
    return (
        <a href={"/api/auth/signin"} onClick={(e) => {
            e.preventDefault()
            signIn(providerId)
        }}>

            <AuthButtonWrapper Icon={Icon} label="Facebook" {...props} />
        </a>
    )
}


FacebookAuthButton.displayName = "FacebookAuthButton"


export default FacebookAuthButton;
