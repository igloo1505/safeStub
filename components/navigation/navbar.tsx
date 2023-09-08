"use client"
import Link from 'next/link';
import React from 'react'
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


const Navbar = ({ session, container }: { session?: Session | null, container?: string }) => {
    const pathname = usePathname()
    const data = useGCMSubscription(session?.user?.id)
    console.log("data: ", data)
    return (
        <div className={clsx("px-8 hidden md:flex py-4 h-[var(--nav-height)] justify-between z-10", container && container)}>
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
        </div>
    )
}


Navbar.displayName = "Navbar"


export default Navbar;
