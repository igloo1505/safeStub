"use client"
import React from 'react'
import { profileNavItems } from './profileNavItems';
import Link from 'next/link';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { signOut } from 'next-auth/react';



interface ProfileTopNavProps {

}

const ProfileTopNav = (props: ProfileTopNavProps) => {
    const params = useSearchParams()
    if (params.get)
        return (
            <div className={"w-full px-6 my-5"}>
                <div className={"w-full h-fit flex flex-row justify-start items-center gap-3 flex-wrap"}>{
                    profileNavItems.map((item) => {
                        return <Link key={`nav-${item.clickClass}`} className={clsx("whitespace-nowrap", params.get("t") === item.clickClass ? "text-foreground underline underline-offset-4" : "text-muted-foreground")} href={`/profile?t=${item.clickClass}`} onClick={item.clickClass === "signout" ? () => signOut() : () => { }}>{item.label}</Link>
                    })
                }</div>
            </div>
        )
}


ProfileTopNav.displayName = "ProfileTopNav"


export default ProfileTopNav;
