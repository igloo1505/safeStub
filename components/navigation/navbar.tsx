"use client"
import Link from 'next/link';
import React from 'react'
import LogoWithName from '../brand/logoWithName';
import { usePathname } from "next/navigation"
import { cn } from '#/utils/universal';


interface NavbarProps {

}

const Navbar = (props: NavbarProps) => {
    const pathname = usePathname()
    return (
        <div className="px-4 hidden md:flex py-6 h-[var(--nav-height)]">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <LogoWithName />
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                    href="/docs"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Documentation
                </Link>
                <Link
                    href="/docs/components"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/docs/components")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Components
                </Link>
                <Link
                    href="/themes"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/themes")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Themes
                </Link>
                <Link
                    href="/examples"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/examples")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Examples
                </Link>
            </nav>
        </div>
    )
}


Navbar.displayName = "Navbar"


export default Navbar;
