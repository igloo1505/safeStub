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
            <div className={"mt-4 grid gap-4"} style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
            }}>
                {activeListings && activeListings.map((a, i) => {
                    return <ActiveListingProfileCard item={a} key={a.id} delay={150 + (i + 1) * 50} show={show} />
                })}
            </div>
        </div>
    )
}


ActiveListingsProfileContent.displayName = "ActiveListingsProfileContent"


export default ActiveListingsProfileContent;
