"use client"
import React, { useEffect, useState } from 'react'
import MobileNavOverlay from './mobileNavOverlay';
import { HomeIcon, LucideIcon, MoonIcon, TicketIcon, User } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';
import Logo from '#/components/brand/logo';
import { Button } from '#/components/ui/button';
import { signIn, signOut } from 'next-auth/react';
import { SessionType } from '#/types/auth';
import { toggleDarkmode } from '#/actions/client/ui';

interface DrawerItemProps {
    Icon: LucideIcon
    label: string
    closeDrawer: () => void
    href: Route
}


const MobileDrawerDivider = () => {
    return (
        <div className="bg-foreground/40 h-[1px] w-5/6" />
    )
}

const MobileDrawerItem = ({ Icon, label, closeDrawer, href }: DrawerItemProps) => {
    return (
        <Link href={href} onClick={closeDrawer}>
            <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-accent text-foreground/60 dark:text-foreground/80"
            >
                <Icon className={"w-8 h-8"} />
                <div className={"text-[15px] ml-4 font-bold"}>{label}</div>
            </div>
        </Link>
    )
}

const MobileDrawer = ({ session, setLocked }: { session: SessionType, setLocked: (b: boolean) => void }) => {
    const closeDrawer = () => {
        document.getElementById("mobile-navbar")?.classList.remove("isOpen")
        setLocked(false)
    }

    const [isAuthenticated, setIsAuthenticated] = useState(session?.user)
    useEffect(() => {
        setIsAuthenticated(session?.user)
    }, [session])
    const handleAuth = () => {
        isAuthenticated ? signOut() : signIn()
        closeDrawer()
    }
    return (
        <>
            <div className={"fixed w-[17rem] z-[2] h-screen max-h-screen top-0 left-0 bg-popover text-popover-foreground translate-x-[-100%] group-[.isOpen]/mobileNav:translate-x-0 transition-transform duration-200 border-r border-muted flex flex-col justify-between items-center gap-4 pb-6"}>
                <div className={"flex flex-col justify-start items-center w-full "}>
                    <div className={"w-full flex flex-row justify-start items-center px-6 pt-4 gap-2 mb-4"}>
                        <Logo className={"bi bi-app-indicator px-2 py-1 rounded-md w-12 h-12"} />
                        <h3 className={"font-semibold tracking-wide text-lg font-lexand"}>
                            <span className={"font-extrabold"}>Safe</span>
                            <span className={"font-thin"}>Stub</span>
                        </h3>
                    </div>
                    <MobileDrawerDivider />
                    <div className={"w-full flex flex-col px-6 pb-4"}>
                        <MobileDrawerItem closeDrawer={closeDrawer} Icon={HomeIcon} href="/" label="Home" />
                        <MobileDrawerItem closeDrawer={closeDrawer} Icon={TicketIcon} href="/myTickets" label="My Tickets" />
                        <MobileDrawerItem closeDrawer={closeDrawer} Icon={User} href="/profile" label="Profile" />

                    </div>
                    <MobileDrawerDivider />
                    <div className={"w-full flex flex-col px-6"}>
                        <a role="button" onClick={() => {
                            closeDrawer()
                            toggleDarkmode()
                        }}>
                            <div
                                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-accent text-foreground/60 dark:text-foreground/80"
                            >
                                <MoonIcon className={"w-8 h-8"} />
                                <div className={"text-[15px] ml-4 font-bold"}>Dark Mode</div>
                            </div>
                        </a>
                    </div>

                </div>
                <div className={"w-full flex flex-col justify-center items-center px-6"}>
                    {isAuthenticated ? <Button onClick={handleAuth}>Log out</Button> : <Link href="/auth/signin" onClick={closeDrawer}><Button>Sign in</Button></Link>}
                </div>
            </div>
            <MobileNavOverlay setLocked={setLocked} />
        </>
    )
}


MobileDrawer.displayName = "MobileDrawer"


export default MobileDrawer;
