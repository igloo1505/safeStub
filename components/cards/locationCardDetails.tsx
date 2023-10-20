import { formatDateLong } from '#/lib/formatting/dates'
import { formatLocation } from '#/lib/formatting/teamNames'
import { Location } from '@prisma/client'
import React from 'react'



interface CardLocationDetailsProps {
    event: {
        description: string
    }
    location: Location
    date?: Date | string
}


const CardLocationDetails = ({ event, location, date }: CardLocationDetailsProps) => {
    return (
        <div className={"w-full flex flex-col justify-start items-start"}>
            <div className={"whitespace-break-spaces sm:whitespace-nowrap"}>{event.description}</div>
            <div className={"text-sm text-foreground/80"}>{formatLocation(location)}</div>
            {date && <div className={"text-sm text-foreground/80"}>{formatDateLong(date)}</div>}
        </div>
    )
}


CardLocationDetails.displayName = "CardLocationDetails"


export default CardLocationDetails;
