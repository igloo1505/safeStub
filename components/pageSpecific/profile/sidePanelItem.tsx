"use client"
import DynamicIcon from '#/components/ui/dynamicIcon'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { Route } from 'next'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'


export type SidePanelItemProps = {
    label: string
    icon: keyof typeof dynamicIconImports
} & ({
    href: string,
    clickClass?: undefined
} | {
    href?: undefined,
    clickClass: string
})

const stateClasses = ["sales", "settings", "profile", "payments", "activeListings", "orders"]

const handleStateToggle = (_class: typeof stateClasses[number]) => {
    let em = document.getElementById("profile-content-container")
    if (!em) return
    for (const c of stateClasses) {
        if (c === _class) {
            em.classList.add(`content-${c}`)
        } else {
            em.classList.remove(`content-${c}`)
        }
    }
}

const SidePanelItem = ({ label, icon, href, clickClass }: SidePanelItemProps) => {
    if (href) {
        return (
            <Link
                href={href as Route}
                className={"w-5/6 grid grid-cols-[auto_1fr] gap-4 mb-3 cursor-pointer"}
            >
                <DynamicIcon name={icon} className={"w-6 h-auto"} />
                <div className={"w-full"}>{label}</div>
            </Link>
        )
    }
    return (
        <div className={"w-5/6 grid grid-cols-[auto_1fr] gap-4 mb-3 cursor-pointer"} onClick={clickClass === "signout" ? () => signOut() : () => handleStateToggle(clickClass as string)}>
            <DynamicIcon name={icon} className={"w-6 h-auto"} />
            <div className={"w-full"}>{label}</div>
        </div>
    )
}


SidePanelItem.displayName = "SidePanelItem"


export default SidePanelItem;
