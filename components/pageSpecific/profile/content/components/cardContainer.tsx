"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#/components/ui/card';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react'



interface ProfileItemCardProps {
    children: React.ReactNode
    title?: string
    description?: string
    footer?: string | React.ReactNode
    className?: string
    delay: number
    show: boolean
}

const ProfileItemCard = ({ children, show, delay, title, description, footer, className }: ProfileItemCardProps) => {
    const [shouldShow, setShouldShow] = useState(show)
    useEffect(() => {
        if (!show) return setShouldShow(false)
        if (show) {
            setTimeout(() => setShouldShow(true), delay)
        }
    }, [show])

    let pr = ""
    title && (pr += "auto ")
    description && (pr += "auto")
    return (
        <Card className={clsx("w-full h-full grid preBounceIn", className && className, shouldShow && "bounceIn shadow-md hover:shadow-sm dark:shadow-none")}
            style={{
                gridTemplateRows: `${pr} 1fr${footer ? " auto" : ""}`,
            }}
        >
            <CardHeader>
                {title && <CardTitle className={"mb-2"}>{title}</CardTitle>}
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent className={"w-full h-full"}>
                {children}
            </CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card >
    )
}


ProfileItemCard.displayName = "ProfileItemCard"


export default ProfileItemCard;
