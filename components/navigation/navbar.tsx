"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import LogoWithName from '../brand/logoWithName';
import { usePathname } from "next/navigation"
import { cn } from '#/utils/universal';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { MoonStar } from 'lucide-react';
import { toggleDarkmode } from '#/actions/client/ui';
import { Button } from '../ui/button';
import clsx from 'clsx';
import NavbarSearchInput from './navbarSearchInput';
import appConfig from "#/data/appConfig.json"
import MobileNavbar, { NavbarButton, navButtons } from './mobile/navbar';

interface NavbarProps {

}


const Navbar = ({ session, container, mobileContainer }: { session?: Session | null, mobileContainer?: string, container?: string }) => {
    const [isMobileVp, setIsMobile] = useState<boolean | null>(null)
    const pathname = usePathname()
    const checkViewport = () => {
        if (typeof window === "undefined") return;
        let vw = window.innerWidth
        console.log("isMobile: ", vw <= appConfig.app.navbarBreakpoint || Boolean(session?.user.id))
        setIsMobile(vw <= appConfig.app.navbarBreakpoint || Boolean(session?.user.id))
    }
    useEffect(() => {
        window.addEventListener("resize", checkViewport)
        return () => window.removeEventListener("resize", checkViewport)
    }, [])
    useEffect(() => {
        checkViewport()
    }, [session])
    /* const data = useGCMSubscription(session?.user?.id) */
    return (
        <>
            {isMobileVp === false ? (<div className={clsx("px-8 w-full hidden md:grid md:grid-cols-[220px_1fr_220px] gap-x-3 py-4 grid-cols-[1fr_auto_1fr]  z-10 relative dark", container && container)}>
                <div className={"flex flex-row justify-center items-center w-fit"}>
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <LogoWithName />
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                        {navButtons.map((b, i) => {
                            return <NavbarButton session={session} item={b} key={`nav-${i}`} pathname={pathname} />
                        })}
                    </nav>
                </div>
                <div className={"w-full h-full flex justify-center items-center"}>
                    <NavbarSearchInput />
                </div>
                <nav className={"flex flex-row justify-end items-center gap-4 w-full"}>
                    <Button variant="ghost" aria-label="dark mode" role="button" onClick={toggleDarkmode} className={"p-2 rounded-[50%]"}>
                        <MoonStar />
                    </Button>
                    <NavbarButton session={session} pathname={pathname} item={{
                        href: "/auth/signin",
                        label: "Sign In",
                        authStatus: "unauthenticated"
                    }} />
                    <a
                        role="button"
                        onClick={() => signOut()}
                        className={cn(
                            "transition-colors hover:text-foreground/80 text-foreground/60",
                            !session && "hidden"
                        )}
                    >
                        Sign Out
                    </a>
                </nav>
            </div>)
                : isMobileVp === true ? <MobileNavbar session={session} container={mobileContainer} /> : <></>
            }
        </>
    )
}


Navbar.displayName = "Navbar"


export default Navbar;
