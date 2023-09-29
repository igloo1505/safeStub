"use client"
import React, { useRef, useState } from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { UserProfileDetails } from '../../profilePageContainer'
import SaleChartToolTip from './saleChartToolTip'
import { months, defaultMonthState, saleChartNameMap } from './saleChartDataFormatting'



interface SalesByLineChartProps {
    sales: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold']
}

const colorMap: { [k in keyof typeof defaultMonthState]: string } = {
    totalPayout: "var(--plot1)",
    totalDollarsSold: "var(--plot2)",
    nSales: "var(--plot3)",
}

const colorClassMap: { [k in keyof typeof defaultMonthState]: string } = {
    totalPayout: "text-[var(--plot1)]",
    totalDollarsSold: "text-[var(--plot2)]",
    nSales: "text-[var(--plot3)]",
}

const getRenderLegend = (toggleLine: (l: keyof typeof defaultMonthState) => void, activeLines: (keyof typeof defaultMonthState)[]) => {
    console.log(`Rendering legend`)
    // eslint-disable-next-line
    return (props: any) => {
        /* const { payload } = props; */
        let payload: { value: keyof typeof defaultMonthState }[] = [{ value: "nSales" }, { value: "totalPayout" }, { value: "totalDollarsSold" }]
        return (
            <ul className={"flex flex-row justify-center items-center gap-2"}>
                {
                    payload.map((entry: any, index: number) => (
                        <li
                            key={`item-${index}`}
                            onClick={() => toggleLine(entry.value as keyof typeof defaultMonthState)}
                            id={`legend-${entry.value}`}
                            className={"cursor-pointer"}
                            style={{
                                color: activeLines.includes(entry.value) ? colorMap[entry.value as keyof typeof defaultMonthState] : "hsl(var(--muted-foreground))"
                            }}>{saleChartNameMap[entry.value as keyof typeof defaultMonthState]}</li>
                    ))
                }
            </ul>
        );
    }
}


/* TODO: Come back here and actually implement this chart once there's some dummy data available. */
const SalesByLineChart = ({ sales }: SalesByLineChartProps) => {
    const [activePlots, setActivePlots] = useState<(keyof typeof defaultMonthState)[]>(["nSales", "totalPayout", "totalDollarsSold"])
    const thisMonth = new Date().getMonth()
    const thisYear = new Date().getFullYear()
    const nSales = useRef<HTMLLIElement>(null!)
    const totalDollarsSold = useRef<HTMLLIElement>(null!)
    const totalPayout = useRef<HTMLLIElement>(null!)
    let monthList = Object.keys(months) as (keyof typeof months)[]
    let data: typeof months = {} as typeof months
    monthList.slice(thisMonth, monthList.length).concat(monthList.slice(0, thisMonth)).reverse().forEach((m) => {
        !data[m as keyof typeof months] && (data[m as keyof typeof months] = { ...defaultMonthState })
    })

    const appendData = (month: keyof typeof months, sale: typeof sales[number]) => {
        data[month].nSales = data[month].nSales + 1
        data[month].totalPayout = data[month].totalPayout + sale.payout
        data[month].totalDollarsSold = data[month].totalDollarsSold + sale.listedPrice
    }

    for (const k of sales) {
        let y = k.postedOn.getFullYear()
        let _m = k.postedOn.getMonth()
        if (_m > thisMonth && y === thisYear - 1) {
            appendData(monthList[_m], k)
        } else if (_m <= thisMonth && y === thisYear) {
            appendData(monthList[_m], k)
        }
    }

    const toggleLineState = (l: keyof typeof defaultMonthState) => {
        if (activePlots.includes(l)) {
            return setActivePlots(activePlots.filter((f) => f !== l))
        } else {
            setActivePlots([...activePlots, l])
        }
    }

    return (
        <ResponsiveContainer
            width="100%"
            height={350}
        >
            <LineChart data={Object.keys(data).map((k) => {
                return {
                    name: k,
                    ...data[k as keyof typeof data]
                }
            })}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />

                <Tooltip content={<SaleChartToolTip />} />
                <Legend content={(() => getRenderLegend(toggleLineState, activePlots))()} />
                {activePlots.includes("nSales") && <Line
                    dataKey="nSales"
                    type="monotone"
                    fill="hsl(var(--muted))"
                    stroke="var(--plot3)"
                />}
                {activePlots.includes("totalPayout") && <Line
                    type="monotone"
                    dataKey="totalPayout"
                    fill="hsl(var(--muted))"
                    stroke="var(--plot1)"
                />}
                {activePlots.includes("totalDollarsSold") && <Line
                    type="monotone"
                    dataKey="totalDollarsSold"
                    fill="hsl(var(--muted))"
                    stroke="var(--plot2)"
                />}
            </LineChart>
        </ResponsiveContainer>
    )
}


SalesByLineChart.displayName = "SalesByLineChart"


export default SalesByLineChart;
