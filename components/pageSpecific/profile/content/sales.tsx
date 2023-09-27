import clsx from 'clsx'
import React from 'react'



interface SalesProfileContentProps {
    show: boolean
}

const SalesProfileContent = ({ show }: SalesProfileContentProps) => {
    return (
        <div className={clsx("", show ? "flex" : "hidden")}>
            Sales Content
        </div>
    )
}


SalesProfileContent.displayName = "SalesProfileContent"


export default SalesProfileContent;
