"use client"
import { formatUSD } from '#/lib/formatting/currency'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'



interface ActiveListingsTopStatsProps {
    nActiveListings: number
    totalEstimatedPayout: number
    show: boolean
}


const ActiveListingStatCard = ({ title, body, delay, show }: {
    title: string,
    body: string,
    show: boolean,
    delay: number
}) => {
    const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => {
        if (show) {
            setTimeout(() => setShouldShow(show), delay)
        }
        else {
            setShouldShow(show)
        }
    }, [show])
    return (
        <div className={clsx("bg-card text-card-foreground w-full h-full grid grid-rows-[auto_1fr] px-3 py-3 rounded-md border border-muted shadow-md hover:shadow-sm dark:shadow-none transition-shadow duration-300 preBounceIn", shouldShow && "bounceIn")}>
            <h2 className={"text-lg"}>{title}</h2>
            <p className={"text-2xl font-bold"}>{body}</p>
        </div>
    )
}

const ActiveListingsTopStats = ({ nActiveListings, show, totalEstimatedPayout }: ActiveListingsTopStatsProps) => {
    return (
        <div className={"w-full h-fit flex flex-col justify-center items-center md:grid md:grid-rows-1 md:grid-cols-[1fr_1fr_1fr] gap-3"}>
            <ActiveListingStatCard
                title="# of Active Listings"
                body={`${nActiveListings}`}
                delay={50}
                show={show}
            />
            <ActiveListingStatCard
                title="Total Estimated Payout"
                body={formatUSD(totalEstimatedPayout)}
                delay={100}
                show={show}
            />
            <ActiveListingStatCard
                title="Something else"
                body={`123`}
                delay={150}
                show={show}
            />
        </div>
    )
}


ActiveListingsTopStats.displayName = "ActiveListingsTopStats"


export default ActiveListingsTopStats;
