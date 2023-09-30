import clsx from 'clsx'
import React from 'react'



interface ModalOverlayProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    open: boolean
}

const ModalOverlay = ({ children, className, onClick, open }: ModalOverlayProps) => {
    return (
        <div className={clsx("w-full h-full fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center transition-transform duration-200", className ? className : "bg-black bg-opacity-60", open ? "scale-100" : "scale-0")} onClick={onClick ? onClick : () => { }}>{children}</div>
    )
}


ModalOverlay.displayName = "ModalOverlay"


export default ModalOverlay;
