let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const formatUSD = (amount?: number) => {
    if (!amount) amount = 0
    return USDollar.format(amount)
}
