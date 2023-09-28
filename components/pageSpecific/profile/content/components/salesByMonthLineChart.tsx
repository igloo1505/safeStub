"use client"
import React from 'react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { UserProfileDetails } from '../../profilePageContainer'



interface SalesByLineChartProps {
    sales: NonNullable<NonNullable<UserProfileDetails>['purchaseHistory']>['sold']
}
const defaultMonthState = {
    nSales: 0,
    totalDollarsSold: 0,
    totalPayout: 0
}

const months = {
    Jan: defaultMonthState,
    Feb: defaultMonthState,
    Mar: defaultMonthState,
    Apr: defaultMonthState,
    May: defaultMonthState,
    Jun: defaultMonthState,
    Jul: defaultMonthState,
    Aug: defaultMonthState,
    Sep: defaultMonthState,
    Oct: defaultMonthState,
    Nov: defaultMonthState,
    Dec: defaultMonthState,
}


/* TODO: Come back here and actually implement this chart once there's some dummy data available. */
const SalesByLineChart = ({ sales }: SalesByLineChartProps) => {
    const thisMonth = new Date().getMonth()
    const thisYear = new Date().getFullYear()
    let monthList = Object.keys(months) as (keyof typeof months)[]
    let data: typeof months = {} as typeof months
    monthList.slice(thisMonth, monthList.length).concat(monthList.slice(0, thisMonth)).reverse().forEach((m) => {
        !data[m as keyof typeof months] && (data[m as keyof typeof months] = defaultMonthState)
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
        }
        if (_m <= thisMonth && y === thisYear) {
            appendData(monthList[_m], k)
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
                <Line dataKey="nSales" fill="#adfa1d" />
                <Line dataKey="totalPayout" fill="#adfa1d" />
                <Line dataKey="totalDollarsSold" fill="#adfa1d" />
            </LineChart>
        </ResponsiveContainer>
    )
}


SalesByLineChart.displayName = "SalesByLineChart"


export default SalesByLineChart;
