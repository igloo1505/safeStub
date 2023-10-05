import { SaleFormObjectType } from "#/components/pageSpecific/sell/form/saleFormContext"


// TODO: Put these all in a class and handle things that way to avoid multiple unnecesary to the same function

export const getTransactionTotalCost = (data: SaleFormObjectType) => {
    return data.tickets.length * data.pricePerTicket
}


const calculateTotalFeesFromTransaction = (data: SaleFormObjectType) => {
    return getTransactionTotalCost(data) * 0.035
}

export const getTotalWithFees = (data: SaleFormObjectType) => {
    // TODO: Need to handle data regarding fees here
    return getTransactionTotalCost(data)
}


export const calculatePayout = (data: SaleFormObjectType) => {
    // TODO: Obviously calculate some profit into here at some point.
    return getTransactionTotalCost(data) - calculateTotalFeesFromTransaction(data)
}
