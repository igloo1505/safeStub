import React from 'react'



interface OrdersProfileContentProps {

}

const OrdersProfileContent = (props: OrdersProfileContentProps) => {
    return (
        <div className={"hidden group-[.content-orders]/profileContainer:flex"}>
            Orders Content
        </div>
    )
}


OrdersProfileContent.displayName = "OrdersProfileContent"


export default OrdersProfileContent;
