import { WithClassName } from '#/types/utility'
import React from 'react'
import ProfileItemCard from './cardContainer'
import { PendingTicketList } from '#/types/query'
import Link from 'next/link'



interface ProfileNotificationsCardProps extends WithClassName {
    delay: number
    show: boolean
    pendingTickets: Promise<PendingTicketList>
}

const AwaitingTransferToSSNotification = ({ length }: { length: number }) => {
    return (
        <div className={"w-full"}><span>{`You have ${length} ticket${length > 0 ? "s" : ""} awaiting transfer to SafeStub Click `}</span><span><Link
            className={"text-sky-500 dark:text-sky-400"}
            href={"/profile?t=sales"}>here</Link>{` to begin the transfer and finalize the sale.`}</span></div>
    )
}

const ProfileNotificationsCard = async ({ show, delay, className, pendingTickets }: ProfileNotificationsCardProps) => {
    const pt = await pendingTickets
    return (
        <ProfileItemCard
            className={className}
            title="Notifications"
            delay={delay}
            show={show}
        >
            {pt.length > 0 && <AwaitingTransferToSSNotification
                length={pt.length}
            />}
            {Boolean(pt.length === 0) && (<div>No current notifications</div>)}
        </ProfileItemCard>
    )
}


ProfileNotificationsCard.displayName = "ProfileNotificationsCard"


export default ProfileNotificationsCard;
