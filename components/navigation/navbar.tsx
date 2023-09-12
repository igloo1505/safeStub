"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import LogoWithName from '../brand/logoWithName';
import { usePathname } from "next/navigation"
import { cn } from '#/utils/universal';
import { Route } from 'next';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { AuthRole, validateRole } from '#/lib/auth/authValidators';
import { MoonStar } from 'lucide-react';
import { toggleDarkmode } from '#/actions/client/ui';
import { Button } from '../ui/button';
import clsx from 'clsx';
import NavbarSearchInput from './navbarSearchInput';
import { useGCMSubscription } from '#/hooks/useGCMSubscription';
import appConfig from "#/data/appConfig.json"
import MobileNavbar from './mobile/navbar';
import { isMobile } from 'react-device-detect';

interface NavbarProps {

}



interface NavbuttonType {
    href: Route
    label: string
    authStatus: AuthRole
}


const navButtons: NavbuttonType[] = [
    {
        href: "/events",
        label: "Events",
        authStatus: "all"
    }
]

const validationMap: { [k in NavbuttonType['authStatus']]: (s?: Session | null) => boolean } = {
    all: (s?: Session | null | undefined) => true,
    unauthenticated: (s?: Session | null | undefined) => Boolean(!s || !s.user),
    authenticated: (s?: Session | null | undefined) => Boolean(s && s.user),
    verified: (s?: Session | null | undefined) => Boolean(s && s?.user?.role === "ADMIN" || s?.user?.role === "VERIFIED"),
    ADMIN: (s?: Session | null | undefined) => Boolean(s && s?.user?.role === "ADMIN"),
    USER: (s?: Session | null | undefined) => validateRole(["USER"], s),
    BANNED: () => false,
    EMPLOYEE: (s?: Session | null | undefined) => validateRole(["EMPLOYEE"], s),
}


const NavbarButton = ({ item, pathname, session }: { session?: Session | null, item: NavbuttonType, pathname: string }) => {
    console.log("session: ", session)
    if (!validationMap[item.authStatus](session)) {
        return null
    }
    return (
        <Link
            href={item.href}
            className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith(item.href)
                    ? "text-foreground"
                    : "text-foreground/60"
            )}
        >
            {item.label}
        </Link>
    )
}


const Navbar = ({ session, container, mobileContainer }: { session?: Session | null, mobileContainer?: string, container?: string }) => {
    const [isMobileVp, setIsMobile] = useState<boolean | null>(null)
    const pathname = usePathname()
    const checkViewport = () => {
        if (typeof window === "undefined") return;
        let vw = window.innerWidth
        setIsMobile(vw <= appConfig.app.navbarBreakpoint)
    }
    useEffect(() => {
        checkViewport()
        window.addEventListener("resize", checkViewport)
        return () => window.removeEventListener("resize", checkViewport)
    }, [])
    /* const data = useGCMSubscription(session?.user?.id) */
    return (
        <>
            {isMobileVp === false ? (<div className={clsx("px-8 w-full hidden md:flex py-4 justify-between z-10 relative", container && container)}>
                <div className={"flex flex-row justify-center items-center w-fit"}>
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <LogoWithName />
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navButtons.map((b, i) => {
                            return <NavbarButton session={session} item={b} key={`nav-${i}`} pathname={pathname} />
                        })}
                    </nav>
                </div>
                <nav className={"w-fit flex flex-row justify-center items-center gap-4"}>
                    <NavbarSearchInput />
                    <Button variant="ghost" role="button" onClick={toggleDarkmode} className={"p-2 rounded-[50%]"}>
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
