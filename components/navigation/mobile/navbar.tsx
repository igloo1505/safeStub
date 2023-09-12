"use client"
import React, { useEffect, useRef } from 'react'
import HamburgerIcon from './hamburger';
import MobileDrawer from './drawer';
import { SessionType } from '#/types/auth';
import useLockedBody from '#/hooks/lockBodyScroll';



interface MobileNavbarProps {
    session: SessionType
}

const MobileNavbar = (props: MobileNavbarProps) => {
    const [locked, setLocked] = useLockedBody(false, 'root')
    let ref = useRef<HTMLDivElement>(null!)
    let prevScroll = 0
    const handleScroll = (e: Event) => {
        let diff = prevScroll - window.scrollY
        prevScroll = window.scrollY
        console.log("diff: ", diff)
        if (diff <= -8) {
            ref.current.classList.add("translate-y-[-100%]")
        }
        if (diff > 3) {
            ref.current.classList.remove("translate-y-[-100%]")
        }
    }

    useEffect(() => {
        if (typeof window === "undefined") return;
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className={"w-screen h-[64px] fixed top-0 left-0 z-[9999] px-8 flex flex-row justify-start items-center group/mobileNav transition-transform duration-150 [&_.scrolling]:translate-y-[-100%]"} id="mobile-navbar" ref={ref}>
            <MobileDrawer session={props.session} setLocked={setLocked} />
            <HamburgerIcon setLocked={setLocked} />
        </div>
    )
}


MobileNavbar.displayName = "MobileNavbar"


export default MobileNavbar;
