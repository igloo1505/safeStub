import React from 'react'
import Stadium from "#/assets/seating/Group 7"
import Image from 'next/image'
import "#/styles/seatingChart.scss"
import Test from '#/assets/seating/test'

interface SeatingChartProps {

}

/* <Image src={stadium} alt="Seating Chart" className={"stadium-seating-chart"} /> */
const SeatingChart = (props: SeatingChartProps) => {
    return (
        <div className={"w-full h-fit flex justify-center items-center"}>
            <Test />
        </div>
    )
}


SeatingChart.displayName = "SeatingChart"


export default SeatingChart;
