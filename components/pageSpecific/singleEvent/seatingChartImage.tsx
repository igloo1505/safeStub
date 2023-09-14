"use client"
import React, { ComponentType, useEffect, useId, useRef } from 'react'
import dynamic from 'next/dynamic'
import { NFLTeamName } from '@prisma/client'
import { SeatingChartProps } from '#/assets/seating/props'
import "#/styles/seatingChart.scss"

interface EventSpecificSeatingChartImageProps {
    arena: string | undefined
}


const findAppropriateSeatingChart = (teamName: NFLTeamName): ComponentType<SeatingChartProps> => {
    console.log(`Find way to organize these seating chart and filenames better`)
    return dynamic(() => import(`../../../assets/seating/${teamName}`), { ssr: false })
}

const EventSpecificSeatingChartImage = (props: EventSpecificSeatingChartImageProps) => {
    const SeatingChart = findAppropriateSeatingChart("Buccaneers")
    /* const addListeners = () => { */
    /*     let em = document.getElementById(props.svgId) */
    /*     console.log("em: ", em) */
    /*     if (!em) return */
    /*     for (var i = 0; i < em.children.length; i++) { */
    /*         const item = em.children.item(i) */
    /*         if (!item) return */
    /*         console.log("item.nodeName: ", item.nodeName) */
    /*         if (item?.nodeName === "path") { */
    /*         } */
    /*     } */
    /* } */
    /* useEffect(() => { */
    /*     if (typeof window === "undefined") return; */
    /*     addListeners() */
    /* }, []) */

    const handleHovered = (s: string | number) => {

    }

    return (
        <div className={"w-full h-full min-h-fit flex flex-col justify-center items-center"}>
            <SeatingChart id={"event-specific-seating-chart"} setHovered={handleHovered} />
        </div>
    )
}


EventSpecificSeatingChartImage.displayName = "EventSpecificSeatingChartImage"


export default EventSpecificSeatingChartImage;
