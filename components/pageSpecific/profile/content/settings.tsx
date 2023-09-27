import clsx from 'clsx'
import React from 'react'
import PlaceHolderCard from './components/placeHolderCard'


interface SettingsProfileContentProps {
    show: boolean
}

const SettingsProfileContent = ({ show }: SettingsProfileContentProps) => {
    return (
        <div className={clsx("w-full h-fit grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4", show ? "grid" : "hidden")}>
            <PlaceHolderCard
                title="Some settings card"
                show={show}
                delay={0.05}
            >
                <div>Settings card 1</div>
            </PlaceHolderCard>
            <PlaceHolderCard
                title="Some other settings card"
                show={show}
                delay={0.15}
            >
                <div>Settings card 2</div>
            </PlaceHolderCard>
        </div>
    )
}


SettingsProfileContent.displayName = "SettingsProfileContent"


export default SettingsProfileContent;

