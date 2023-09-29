
export const defaultMonthState = {
    nSales: 0,
    totalDollarsSold: 0,
    totalPayout: 0
}

export const months = {
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

export const fullMonth: { [k in keyof typeof months]: string } = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
}

export const saleChartNameMap: { [k in keyof typeof defaultMonthState]?: string } = {
    nSales: "# of Sales",
    totalPayout: "Payout",
    totalDollarsSold: "Sold"
}
