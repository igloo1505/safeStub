"use client"
import clsx from 'clsx'
import React from 'react'
import { useToast } from '../ui/use-toast'
import { copyToClipboard } from '#/utils/copyStringToClipboard'



interface CopyTextProps {
    children: React.ReactNode
    copyText: string
    notificationText?: string
    notifcationTitle?: string
    className?: string
}

const CopyText = ({ children, notifcationTitle, notificationText, copyText, className }: CopyTextProps) => {
    const { toast } = useToast()
    const copy = async () => {
        let success = await copyToClipboard(copyText)
        if (success && Boolean(notificationText || notifcationTitle)) {
            toast({
                title: notifcationTitle,
                description: notificationText
            })
        }
    }
    return (
        <div onClick={copy} className={clsx("cursor-pointer", className && className)}>{children}</div>
    )
}


CopyText.displayName = "CopyText"


export default CopyText;
