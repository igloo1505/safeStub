"use client"
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import ActiveListingsTopStats from './components/activeListingTopStats'
import ActiveListingProfileCard from './components/activeListingProfileCard'
import { UserProfileDetails } from '../profilePageContainer'
import SelectActiveListingFilter from './components/selectActiveListingFilter'
import { TRANSACTIONSTATUS } from '@prisma/client'



interface ActiveListingsProfileContentProps {
    show: boolean
    nActiveListings?: number
    totalEstimatedPayout?: number
    activeListings: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold']
}

const ActiveListingsProfileContent = ({ show, activeListings, nActiveListings, totalEstimatedPayout }: ActiveListingsProfileContentProps) => {
    const [listings, setListings] = useState<typeof activeListings>(activeListings)
    const [activeFilter, setActiveFilter] = useState<TRANSACTIONSTATUS | null>(null)

    useEffect(() => {
        console.log("activeFilter: ", activeFilter)
        if (activeFilter) {
            return setListings(activeListings.filter((f) => f.status === activeFilter))
        }
        if (activeFilter === null) {
            return setListings(activeListings)
        }
    }, [activeFilter])

    return (
        <div className={clsx("w-full h-fit flex-col justify-start gap-4", show ? "flex" : "hidden")}>
            <div className={"w-full h-fit"}>
                <SelectActiveListingFilter setActiveFilter={setActiveFilter} />
            </div>
            <ActiveListingsTopStats
                nActiveListings={nActiveListings || 0}
                totalEstimatedPayout={totalEstimatedPayout || 0}
                show={show}
            />
            <div className={"grid gap-4 w-full h-fit"} style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(min(400px,calc(100vw-2rem)), 1fr))"
            }}>
                {listings && listings.map((a, i) => {
                    return <ActiveListingProfileCard item={a} key={a.id} delay={150 + (i + 1) * 50} show={show} />
                })}
            </div>
        </div>
    )
}


ActiveListingsProfileContent.displayName = "ActiveListingsProfileContent"


export default ActiveListingsProfileContent;
