import clsx from 'clsx'
import React from 'react'
import ActiveListingsTopStats from './components/activeListingTopStats'
import ActiveListingProfileCard from './components/activeListingProfileCard'
import { UserProfileDetails } from '../profilePageContainer'



interface ActiveListingsProfileContentProps {
    show: boolean
    nActiveListings?: number
    totalEstimatedPayout?: number
    activeListings: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold']
}

const ActiveListingsProfileContent = ({ show, activeListings, nActiveListings, totalEstimatedPayout }: ActiveListingsProfileContentProps) => {
    return (
        <div className={clsx("w-full h-fit flex-col justify-start", show ? "flex" : "hidden")}>
            <ActiveListingsTopStats
                nActiveListings={nActiveListings || 0}
                totalEstimatedPayout={totalEstimatedPayout || 0}
                show={show}
            />
            <div className={""}>
                {activeListings && activeListings.map((a) => {
                    return <ActiveListingProfileCard item={a} key={a.id} />
                })}
            </div>
        </div>
    )
}


ActiveListingsProfileContent.displayName = "ActiveListingsProfileContent"


export default ActiveListingsProfileContent;
