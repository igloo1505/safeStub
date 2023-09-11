import React from 'react'
import HamburgerIcon from './hamburger';
import MobileDrawer from './drawer';
import { SessionType } from '#/types/auth';



interface MobileNavbarProps {
    session: SessionType
}

const MobileNavbar = (props: MobileNavbarProps) => {
    return (
        <div className={"w-screen h-[64px] z-[9999] px-8 flex flex-row justify-start items-center group/mobileNav"} id="mobile-navbar">
            <MobileDrawer session={props.session} />
            <HamburgerIcon />
        </div>
    )
}


MobileNavbar.displayName = "MobileNavbar"


export default MobileNavbar;
