"use client"
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import { Link as UILink } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import LogoWithName from "../brand/logoWithName";
import Link from "next/link";
/* import { Button } from "../ui/button"; */
import { toggleDarkmode } from "#/actions/client/ui";
import { MoonIcon, MoonStar } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { AuthRole, validateRole } from "#/lib/auth/authValidators";
import { Route } from "next";
import { usePathname } from "next/navigation";
import { cn } from "@nextui-org/system";
import DarkModeToggle from "./darkToggle";





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
    if (!validationMap[item.authStatus](session)) {
        return null
    }
    console.log("isActive: ", pathname?.startsWith(item.href), item.href)
    return (
        <NavbarItem isActive={pathname?.startsWith(item.href)}>
            <Link
                href={item.href}
            /* className={cn( */
            /*     "transition-colors hover:text-foreground/80", */
            /*     pathname?.startsWith(item.href) */
            /*         ? "text-foreground" */
            /*         : "text-foreground/60" */
            /* )} */
            >
                <Button>
                    {item.label}
                </Button>
            </Link>
        </NavbarItem>
    )
}




const NavbarEm = ({ session }: { session?: Session | null }) => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    return (
        <Navbar shouldHideOnScroll isBordered
            onMenuOpenChange={() => setOpen(!open)}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Link href="/">
                    <NavbarBrand>
                        <LogoWithName />
                    </NavbarBrand>
                </Link>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navButtons.map((b, i) => {
                    return <NavbarButton session={session} item={b} key={`nav-${i}`} pathname={pathname} />
                })}
            </NavbarContent>
            <NavbarContent justify="end">
                <Button isIconOnly color="danger" aria-label="dark mode" onClick={toggleDarkmode}>
                    <MoonIcon />
                </Button>
                <DarkModeToggle />
                <NavbarButton session={session} pathname={pathname} item={{
                    href: "/auth/signin",
                    label: "Login",
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
                    Logout
                </a>
            </NavbarContent>
        </Navbar>
    );
}


export default NavbarEm
