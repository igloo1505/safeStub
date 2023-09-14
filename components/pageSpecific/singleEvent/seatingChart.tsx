"use client"
import { SingleEventReturned } from '#/types/query'
import React, { useEffect, useState } from 'react'
import EventSpecificSeatingChartImage from './seatingChartImage'



interface EventSpecificSeatingChartProps {
    arena: undefined | null | NonNullable<SingleEventReturned>['arena']
}


const SeatingChart = () => {

}


const EventSpecificSeatingChart = ({ arena }: EventSpecificSeatingChartProps) => {
    return (
        <div className={"h-[40vh] w-full flex flex-col justify-center items-center min-w-0 min-h-[40vh]"}>
            {arena ? <EventSpecificSeatingChartImage arena={arena?.name} /> : <div className={"text-foreground text-lg text-center"}>No seating chart is available for this event.</div>}
        </div>
    )
}


EventSpecificSeatingChart.displayName = "EventSpecificSeatingChart"


export default EventSpecificSeatingChart;
