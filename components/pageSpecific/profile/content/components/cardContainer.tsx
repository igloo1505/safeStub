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
    titleClasses?: string
    titleRight?: React.ReactNode
}

const ProfileItemCard = ({ children, titleRight, show, delay, title, description, footer, className, titleClasses }: ProfileItemCardProps) => {
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
                {title && <div className={"w-full flex flex-row justify-between items-center"}><CardTitle className={clsx("mb-2", titleClasses && titleClasses)}>{title}</CardTitle>{titleRight && titleRight}</div>}
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
