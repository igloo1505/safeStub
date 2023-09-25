import DynamicIcon from '#/components/ui/dynamicIcon'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { Route } from 'next'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { string } from 'zod'
import SidePanelItem, { SidePanelItemProps } from './sidePanelItem'



interface ProfileSidePanelProps {

}

const SidePanelLabel = ({ children }: { children: string }) => {
    return (
        <h2 className={"font-bold text-lg w-full text-start pl-6"}>{children}</h2>
    )
}

const SidePanelSeparator = () => {
    return <div className={"w-[calc(100%-2rem)] px-4 h-[1px] bg-muted-foreground/60 dark:bg-muted-foreground my-3"} />
}





const items: SidePanelItemProps[] = [
    {
        label: "Profile",
        icon: "user",
        clickClass: "profile",
    }, {
        label: "Orders",
        icon: "credit-card",
        clickClass: "orders",
    }, {
        label: "Sales",
        icon: "dollar-sign",
        clickClass: "sales",
    }, {
        label: "Active Listings",
        icon: "book-open",
        clickClass: "activeListings",
    }, {
        label: "Payments",
        icon: "users",
        clickClass: "payments",
    }, {
        label: "Settings",
        icon: "settings",
        clickClass: "settings",
    }, {
        label: "Log Out",
        icon: "log-out",
        clickClass: "signout",
    }
]


const ProfileSidePanel = (props: ProfileSidePanelProps) => {
    return (
        <div className={"w-[300px] h-full top-[80px] left-0 bg-secondary px-2 py-4 rounded-tr-lg rounded-tb-lg flex flex-col justify-start items-center"}>
            <SidePanelLabel>My Account</SidePanelLabel>
            <SidePanelSeparator />
            {items.map((item) => {
                return <>
                    <SidePanelItem {...item} key={`side-panel-${item.label}`} />
                    {["Settings", "Active Listings"].indexOf(item.label) > -1 && <SidePanelSeparator />}
                </>
            })}
        </div>
    )
}


ProfileSidePanel.displayName = "ProfileSidePanel"


export default ProfileSidePanel;
