"use client"
import React, { useEffect, useRef } from 'react'
import HamburgerIcon from './hamburger';
import MobileDrawer from './drawer';
import { SessionType } from '#/types/auth';
import useLockedBody from '#/hooks/lockBodyScroll';
import clsx from 'clsx';
import { cn } from '#/utils/universal';
import Link from 'next/link'
import { signOut } from 'next-auth/react';
import NavbarSearchInput from '../navbarSearchInput';
import { Session } from 'next-auth';
import { AuthRole, validateRole } from '#/lib/auth/authValidators';
import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';



export interface MobileNavbarProps {
    session: SessionType
    container?: string
}



export interface NavbuttonType {
    href: Route
    label: string
    authStatus: AuthRole
}


export const navButtons: NavbuttonType[] = [
    {
        href: "/events",
        label: "Events",
        authStatus: "all"
    },
    {
        href: "/admin",
        label: "Admin",
        authStatus: "ADMIN"
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



export const NavbarButton = ({ item, pathname, session, className }: { session?: Session | null, item: NavbuttonType, pathname: string, className?: string }) => {

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
                    : "text-foreground/60",
                className && className
            )}
        >
            {item.label}
        </Link>
    )
}

const MobileNavbar = ({ session, container }: MobileNavbarProps) => {
    const [locked, setLocked] = useLockedBody(false, 'root')
    const pathname = usePathname()
    const router = useRouter()
    let ref = useRef<HTMLDivElement>(null!)
    let prevScroll = 0
    const handleScroll = (e: Event) => {
        let diff = prevScroll - window.scrollY
        prevScroll = window.scrollY
        if (diff <= -8) {
            ref.current?.classList?.add("translate-y-[-100%]")
        }
        if (diff > 3) {
            ref.current?.classList?.remove("translate-y-[-100%]")
        }
    }

    useEffect(() => {
        if (typeof window === "undefined") return;
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={clsx("w-full h-[64px] top-0 left-0 z-[9999] px-8 flex flex-row gap-x-3 justify-between items-center group/mobileNav transition-transform duration-150 [&_.scrolling]:translate-y-[-100%]", container && container)} id="mobile-navbar" ref={ref}>
            <div className={"flex flex-row justify-center items-center w-fit"}>
                <MobileDrawer session={session} setLocked={setLocked} />
                <HamburgerIcon setLocked={setLocked} />
            </div>
            <div className={"w-5/6 max-w-screen-sm h-full flex justify-center items-center"}>
                <NavbarSearchInput />
            </div>
            <nav className={clsx("w-fit justify-center items-center gap-4 hidden lg:flex flex-row")}>
                <NavbarButton
                    session={session}
                    pathname={pathname}
                    item={{
                        href: "/auth/signin",
                        label: "Sign In",
                        authStatus: "unauthenticated"
                    }}

                    className={clsx(session?.user.id ? "hidden" : "inline-block")}
                />
                <a
                    role="button"
                    onClick={() => {
                        signOut({
                            redirect: false
                        })
                        router.push("/")
                    }}
                    className={cn(
                        "transition-colors hover:text-foreground/80 text-foreground/60 hidden whitespace-nowrap break-keep",
                        session?.user?.id ? "lg:inline-block" : "hidden"
                    )}
                >
                    Sign Out
                </a>
            </nav>
        </div>
    )
}


MobileNavbar.displayName = "MobileNavbar"


export default MobileNavbar;
