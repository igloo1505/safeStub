import React from 'react'



interface EditListingFormHeaderProps {
    children: string
}

const EditListingFormHeader = ({ children }: EditListingFormHeaderProps) => {
    return (
        <h2 className={"font-semibold pt-2 text-xl tracking-wide"}>{children}</h2>
    )
}


EditListingFormHeader.displayName = "EditListingFormHeader"


export default EditListingFormHeader;
