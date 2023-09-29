import React from 'react'
import { defaultMonthState, fullMonth, months, saleChartNameMap } from './saleChartDataFormatting'
import { TooltipProps } from 'recharts'
import { formatUSD } from '#/lib/formatting/currency'



interface SaleChartToolTipProps extends TooltipProps<number, string> {

}

const SaleChartToolTip = ({ active, payload, label }: SaleChartToolTipProps) => {
    if (!payload) return null
    return (
        <div className="flex flex-col justify-center items-start bg-popover text-popover-foreground px-2 rounded-md border border-border">
            <p className={"font-semibold"}>{fullMonth[label as keyof typeof months]}</p>
            <p className="">{`${saleChartNameMap[payload[0]?.name as keyof typeof defaultMonthState]} : ${payload[0]?.value}`}</p>
            <p className="">{`${saleChartNameMap[payload[1]?.name as keyof typeof defaultMonthState]} : ${formatUSD(payload[1]?.value)}`}</p>
            <p className="">{`${saleChartNameMap[payload[2]?.name as keyof typeof defaultMonthState]} : ${formatUSD(payload[2]?.value)}`}</p>
        </div>
    )
}


SaleChartToolTip.displayName = "SaleChartToolTip"


export default SaleChartToolTip;
