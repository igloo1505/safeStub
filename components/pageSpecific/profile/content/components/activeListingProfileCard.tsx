"use client"
import React, { useEffect, useRef, useState } from 'react'
import { UserProfileDetails } from '../../profilePageContainer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import { formatDateLong } from '#/lib/formatting/dates'
import { formatLocation } from '#/lib/formatting/teamNames'
import { formatUSD } from '#/lib/formatting/currency'
import { payoutMethodLabelMap, transactionStatusLabelMap } from '#/types/profile'
import clsx from 'clsx'
import { XIcon } from 'lucide-react'
import { client } from '#/trpc/client'
import axios from 'axios'
import { getSession } from 'next-auth/react'



interface ActiveListingProfileCardProps {
    item: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold'][number]
    delay: number
    show: boolean
}

interface ListItemDetailProps {
    label: string
    value: string
}

const ListingItemDetail = ({ label, value }: ListItemDetailProps) => {
    return (
        <div className={"w-full grid grid-cols-[200px_1fr]"}>
            <h5>{label}</h5>
            <p>{value}</p>
        </div>
    )
}

const ActiveListingProfileCard = ({ item, show, delay }: ActiveListingProfileCardProps) => {
    const [shouldShow, setShouldShow] = useState(false)
    const ref = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        if (show) {
            setTimeout(() => setShouldShow(show), delay)
        }
        else {
            setShouldShow(show)
        }
    }, [show])
    let nTickets = item.tickets.length
    for (const t of item.ticketGroups) {
        nTickets += t.tickets.length
    }
    let locationString = { date: "", location: "" }
    if (item.ticketGroups[0]) {
        locationString = {
            date: formatDateLong(item.ticketGroups[0]?.Event?.date),
            location: `${item.ticketGroups[0]?.Event?.arena?.name} ${formatLocation(item.ticketGroups[0]?.Event?.arena?.location)}`
        }
    } else if (item.tickets[0]) {
        locationString = {
            date: formatDateLong(item.tickets[0]?.Event?.date),
            location: `${item.tickets[0]?.Event?.arena?.name} ${formatLocation(item.tickets[0]?.Event?.arena?.location)}`
        }
    }
    const details: ListItemDetailProps[] = [
        {
            label: "Tickets",
            value: `${nTickets}`,
        },
        {
            label: "Listing Price",
            value: formatUSD(item.listedPrice)
        },
        {
            label: "Payout",
            value: formatUSD(item.payout)
        },
        {
            label: "Payout Method",
            value: payoutMethodLabelMap[item.payoutMethod]
        },
        {
            label: "Status",
            value: transactionStatusLabelMap[item.status]
        }
    ]

    const deleteItem = async () => {
        const session = await getSession()
        let res = await axios.post("/api/listing/deleteTransaction", { transactionId: item.id, sellerId: session?.user.id, sellerPaymentHistoryId: item.sellerId })
        if (res.data.id === item.id) {
            if (ref.current) {
                ref.current.style.display = "none"
            }
        }
    }

    return (
        <Card className={clsx("w-full h-full shadow-md hover:shadow-sm dark:shadow-none preBounceIn", shouldShow && "bounceIn")} ref={ref}>
            <CardHeader className={"relative"}>
                <CardTitle className={"pr-8"}>{`Order ${item.id}`}</CardTitle>
                {item?.tickets[0]?.Event?.description && <div>{item.tickets[0].Event.description}</div>}
                <CardDescription>
                    <div>{locationString.date}</div>
                    <div>{locationString.location}</div>
                </CardDescription>
                <XIcon className={"absolute top-2 right-4 hover:scale-90 cursor-pointer transition-transform duration-300"} onClick={deleteItem} />
            </CardHeader>
            <CardContent>
                {details.map((j, i) => {
                    return <ListingItemDetail {...j} key={`${item.id}-${i}`} />
                })}
            </CardContent>
        </Card>
    )
}


ActiveListingProfileCard.displayName = "ActiveListingProfileCard"


export default ActiveListingProfileCard;
