import React from 'react'
import { UserProfileDetails } from '../../profilePageContainer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import { formatDateLong } from '#/lib/formatting/dates'
import { formatLocation } from '#/lib/formatting/teamNames'



interface ActiveListingProfileCardProps {
    item: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold'][number]
}

const ActiveListingProfileCard = ({ item }: ActiveListingProfileCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{`Order ${item.id}`}</CardTitle>
                {item.tickets[0].Event?.description && <div>{item.tickets[0].Event.description}</div>}
                <CardDescription>{`${formatDateLong(item.tickets[0].Event?.date)} at ${item.tickets[0]?.Event?.arena?.name} ${formatLocation(item.tickets[0]?.Event?.arena?.location)}`}</CardDescription>
                <CardContent>
                    I&apos;ll come back to this...
                </CardContent>
            </CardHeader>
        </Card>
    )
}


ActiveListingProfileCard.displayName = "ActiveListingProfileCard"


export default ActiveListingProfileCard;
