import { SaleFormObjectType } from "#/components/pageSpecific/sell/form/saleFormContext"

export const calculatePayout = (data: SaleFormObjectType) => {
    // TODO: Obviously calculate some profit into here at some point.
    return data.pricePerTicket * data.tickets.length
}


export const getTotalWithFees = (data: SaleFormObjectType) => {
    // TODO: Need to handle data regarding fees here
    return data.pricePerTicket * data.tickets.length
}
