"use client"
import React from 'react'
import "#/styles/mobileNav.scss"
import { usePathname } from 'next/navigation'
import clsx from 'clsx'


interface HamburgerIconProps {
    setLocked: (b: boolean) => void
}

const HamburgerIcon = ({ setLocked }: HamburgerIconProps) => {
    const pathname = usePathname()
    const toggleOpen = () => {
        let em = document.getElementById("mobile-navbar")
        if (!em) return
        let currentlyOpen = em.classList.contains("isOpen")
        if (!currentlyOpen) {
            setLocked(true)
            em.classList.add("isOpen")
            return
        }
        if (currentlyOpen) {
            setLocked(false)
            em.classList.remove("isOpen")
        }
    }
    return (
        <svg id="hamburger" className={clsx("mobile-nav-burger cursor-pointer z-[2] w-8 h-8 group-[.isOpen]/mobileNav:translate-x-48 transition-transform duration-200 group-[.isOpen]/mobileNav:stroke-popover-foreground", pathname === "/" ? "stroke-white" : "stroke-foreground")} viewBox="0 0 60 40" onClick={toggleOpen}>
            <g stroke-width="4" strokeLinecap="round" strokeLinejoin="round">
                <path id="top-line" d="M10,10 L50,10 Z"></path>
                <path id="middle-line" d="M10,20 L50,20 Z"></path>
                <path id="bottom-line" d="M10,30 L50,30 Z"></path>
            </g>
        </svg>
    )
}


HamburgerIcon.displayName = "HamburgerIcon"


export default HamburgerIcon;
