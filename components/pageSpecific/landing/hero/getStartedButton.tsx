"use client"
import { Button } from '#/components/ui/button'
import Link from 'next/link'
import React from 'react'



interface GetStartedButtonProps {
    userId?: string | null
}

const GetStartedButton = ({ userId }: GetStartedButtonProps) => {
    return (
        <Link href={userId ? "/events" : "/auth/signin"}>
            <Button className={"bg-primary text-primary-foreground"}>Get Started</Button>
        </Link>
    )
}


GetStartedButton.displayName = "GetStartedButton"


export default GetStartedButton;
