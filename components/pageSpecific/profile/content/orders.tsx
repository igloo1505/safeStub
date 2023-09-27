import clsx from 'clsx'
import React from 'react'



interface OrdersProfileContentProps {
    show: boolean
}

const OrdersProfileContent = ({ show }: OrdersProfileContentProps) => {
    return (
        <div className={clsx("", show ? "flex" : "hidden")}>
            Orders Content
        </div>
    )
}


OrdersProfileContent.displayName = "OrdersProfileContent"


export default OrdersProfileContent;
