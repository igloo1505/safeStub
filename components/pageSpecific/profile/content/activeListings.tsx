import React from 'react'



interface ActiveListingsProfileContentProps {

}

const ActiveListingsProfileContent = (props: ActiveListingsProfileContentProps) => {
    return (
        <div className={"hidden group-[.content-activeListings]/profileContainer:flex"}>
            Active Listings Content
        </div>
    )
}


ActiveListingsProfileContent.displayName = "ActiveListingsProfileContent"


export default ActiveListingsProfileContent;
