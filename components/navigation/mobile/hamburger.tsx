"use client"
import React from 'react'
import "#/styles/mobileNav.scss"


interface HamburgerIconProps {
}

const HamburgerIcon = ({ }: HamburgerIconProps) => {
    const toggleOpen = () => {
        let em = document.getElementById("mobile-navbar")
        if (!em) return
        em.classList.toggle("isOpen")
    }
    return (
        <svg id="hamburger" className="mobile-nav-burger z-[2] w-8 h-8 group-[.isOpen]/mobileNav:translate-x-48 transition-transform duration-200" viewBox="0 0 60 40" onClick={toggleOpen}>
            <g stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <path id="top-line" d="M10,10 L50,10 Z"></path>
                <path id="middle-line" d="M10,20 L50,20 Z"></path>
                <path id="bottom-line" d="M10,30 L50,30 Z"></path>
            </g>
        </svg>
    )
}


HamburgerIcon.displayName = "HamburgerIcon"


export default HamburgerIcon;
