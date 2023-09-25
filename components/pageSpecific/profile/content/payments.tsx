import React from 'react'



interface PaymentsProfileContentProps {

}

const PaymentsProfileContent = (props: PaymentsProfileContentProps) => {
    return (
        <div className={"hidden group-[.content-payments]/profileContainer:flex"}>
            Payments Content
        </div>
    )
}


PaymentsProfileContent.displayName = "PaymentsProfileContent"


export default PaymentsProfileContent;
