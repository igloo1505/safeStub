"use client"
import React from 'react'
import SidePanelItem, { SidePanelItemProps } from './sidePanelItem'
import { BookOpenIcon, CreditCardIcon, DollarSignIcon, LogOutIcon, SettingsIcon, UserIcon, UsersIcon } from 'lucide-react'
import { profileNavItems } from './profileNavItems'



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



const ProfileSidePanel = (props: ProfileSidePanelProps) => {
    return (
        <div className={"w-[300px] h-full top-[80px] left-0 bg-card text-card-foreground px-2 py-4 rounded-tr-lg rounded-tb-lg  flex-col justify-start items-center  hidden xl:flex"}>
            <SidePanelLabel>My Account</SidePanelLabel>
            <SidePanelSeparator />
            {profileNavItems.map((item) => {
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
