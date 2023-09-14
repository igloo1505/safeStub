
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const formatUSD = (amount: number) => {
    return USDollar.format(amount)
}
