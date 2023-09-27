import React from 'react'
import ProfileItemCard from './cardContainer';
import { WithClassName } from '#/types/utility';



interface PlaceHolderCardProps extends WithClassName {
    title?: string
    delay: number
    show: boolean
    children?: React.ReactNode
}

const PlaceHolderCard = ({ title, show, delay, className, children }: PlaceHolderCardProps) => {
    return (
        <ProfileItemCard
            className={className}
            title={title || "Placeholder"}
            delay={delay}
            show={show}
        >

        </ProfileItemCard>
    )
}


PlaceHolderCard.displayName = "PlaceHolderCard"


export default PlaceHolderCard;
