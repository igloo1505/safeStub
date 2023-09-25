import React from 'react'



interface SalesProfileContentProps {

}

const SalesProfileContent = (props: SalesProfileContentProps) => {
    return (
        <div className={"hidden group-[.content-sales]/profileContainer:flex"}>
            Sales Content
        </div>
    )
}


SalesProfileContent.displayName = "SalesProfileContent"


export default SalesProfileContent;
