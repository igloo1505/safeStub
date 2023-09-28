"use client"
import { signOut } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { handleStateToggle } from './profileNavItems'


export type SidePanelItemProps = {
    label: string
    Icon: React.FC<{ className: string }>
    clickClass: string
}

const SidePanelItem = ({ label, Icon, clickClass }: SidePanelItemProps) => {
    const router = useRouter()
    return (
        <div className={"w-5/6 px-4 py-2 grid grid-cols-[auto_1fr] gap-4 cursor-pointer hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"} onClick={clickClass === "signout" ? async () => {
            await signOut({ redirect: false })
            redirect("/")
        } : () => handleStateToggle(clickClass as string, router)}>
            <Icon className={"w-6 h-auto"} />
            <div className={"w-full"}>{label}</div>
        </div>
    )
}


SidePanelItem.displayName = "SidePanelItem"


export default SidePanelItem;
