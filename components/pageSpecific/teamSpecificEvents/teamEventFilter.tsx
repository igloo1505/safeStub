"use client"
import { Button } from '#/components/ui/button'
import clsx from 'clsx'
import React from 'react'

type StateKey = "all" | "home" | "away"

interface TeamEventFilterButtonGroupProps {
    activeFilterState: StateKey
}

interface ButtonProps {
    label: string
    className?: string
    stateKey: StateKey
}

const setFilterState = (state: StateKey) => {
    let em = document.getElementById("team-specific-event-list")
    if (!em) return
    for (const k of ["all", "home", "away"]) {
        if (k === state) {
            em.classList.add(`state-${k}`)
        } else {
            em.classList.remove(`state-${k}`)
        }
    }
}


const ToggleTeamFilterButton = ({ label, className, stateKey }: ButtonProps) => {
    return (
        <Button className={clsx("opacity-60 bg-primary text-primary-foreground w-full md:w-fit", className && className, stateKey && `btn-${stateKey}`)} onClick={() => setFilterState(stateKey)}>
            <span className={"hidden md:flex"}>
                {`${label} Games`}
            </span>
            <span className={"flex md:hidden"}>
                {label}
            </span>
        </Button>
    )
}

const TeamEventFilterButtonGroup = (props: TeamEventFilterButtonGroupProps) => {
    return (
        <div className={"mt-4 w-full grid grid-cols-3 md:flex md:flex-row"}>
            <ToggleTeamFilterButton label="All" className={"rounded-tr-none rounded-br-none group-[.state-all]/teamSpecific:opacity-100"} stateKey='all' />
            <ToggleTeamFilterButton label="Home" className={"rounded-none group-[.state-home]/teamSpecific:opacity-100"} stateKey='home' />
            <ToggleTeamFilterButton label="Away" className={"rounded-tl-none rounded-bl-none group-[.state-away]/teamSpecific:opacity-100"} stateKey="away" />
        </div>
    )
}


TeamEventFilterButtonGroup.displayName = "TeamEventFilterButtonGroup"


export default TeamEventFilterButtonGroup;
