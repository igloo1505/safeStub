import React from 'react'

const MobileNavOverlay = ({ setLocked }: { setLocked: (b: boolean) => void }) => {
    const closeNav = () => {
        setLocked(false)
        document.getElementById("mobile-navbar")?.classList?.remove("isOpen")
    }
    return (
        <div className={"w-screen h-screen z-[1] fixed top-0 left-0 bg-black bg-opacity-0  translate-x-[-100%] group-[.isOpen]/mobileNav:translate-x-0 group-[.isOpen]/mobileNav:bg-opacity-25 transition-opacity duration-200"} onClick={closeNav} />
    )
}


MobileNavOverlay.displayName = "MobileNavOverlay"


export default MobileNavOverlay;
