"use client"
import DynamicIcon from '#/components/ui/dynamicIcon'
import { ProfileActiveType } from '#/types/profile'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { Route } from 'next'
import { signOut } from 'next-auth/react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


export type SidePanelItemProps = {
    label: string
    Icon: React.FC<{ className: string }>
} & ({
    href: string,
    clickClass?: ProfileActiveType
} | {
    href?: undefined,
    clickClass: string
})

const stateClasses = ["sales", "settings", "profile", "payments", "activeListings", "orders"]

const handleStateToggle = (_class: typeof stateClasses[number], router: AppRouterInstance) => {
    router.push(`/profile?t=${_class}`)
}

const SidePanelItem = ({ label, Icon, href, clickClass }: SidePanelItemProps) => {
    const router = useRouter()
    if (href) {
        return (
            <Link
                href={href as Route}
                className={"w-5/6 grid grid-cols-[auto_1fr] gap-4 cursor-pointer px-4 py-2"}
            >
                <Icon className={"w-6 h-auto"} />
                <div className={"w-full"}>{label}</div>
            </Link>
        )
    }
    return (
        <div className={"w-5/6 px-4 py-2 grid grid-cols-[auto_1fr] gap-4 cursor-pointer hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"} onClick={clickClass === "signout" ? () => signOut() : () => handleStateToggle(clickClass as string, router)}>
            <Icon className={"w-6 h-auto"} />
            <div className={"w-full"}>{label}</div>
        </div>
    )
}


SidePanelItem.displayName = "SidePanelItem"


export default SidePanelItem;
