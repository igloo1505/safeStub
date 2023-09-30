"use client"
import React from 'react'
import { profileNavItems } from './profileNavItems';
import Link from 'next/link';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import store from '#/state/store';
import { showNotification } from '#/state/slices/notifications';



interface ProfileTopNavProps {

}

const ProfileTopNav = (props: ProfileTopNavProps) => {
    const params = useSearchParams()
    const signOut = () => {
        console.log("dispatching: ")
        store.dispatch(showNotification("logout"))
    }
    if (params.get)
        return (
            <div className={"w-full px-6 my-5"}>
                <div className={"w-full h-fit flex flex-row justify-start items-center gap-3 flex-wrap"}>{
                    profileNavItems.map((item) => {
                        return item.clickClass === "signout" ? <div key={`nav-${item.clickClass}`} className={clsx("whitespace-nowrap cursor-pointer", params.get("t") === item.clickClass ? "text-foreground underline underline-offset-4" : "text-muted-foreground")} onClick={() => signOut()}>{item.label}</div>
                            : <Link shallow key={`nav-${item.clickClass}`} className={clsx("whitespace-nowrap", params.get("t") === item.clickClass ? "text-foreground underline underline-offset-4" : "text-muted-foreground")} href={`/profile?t=${item.clickClass}`} onClick={item.clickClass === "signout" ? () => signOut() : () => { }}>{item.label}</Link>
                    })
                }</div>
            </div>
        )
}


ProfileTopNav.displayName = "ProfileTopNav"


export default ProfileTopNav;
