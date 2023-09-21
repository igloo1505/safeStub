import { UseFormReturn, useForm } from "react-hook-form"
import { z } from "zod"

export enum PayoutMethodEnum {
    paypal = "paypal"
}

export const PaymentMethodList: { label: string, value: PayoutMethodEnum }[] = [
    {
        value: PayoutMethodEnum.paypal,
        label: "PayPal"
    }
]


export const saleFormSchema = z.object({
    quantity: z.number().int().min(1),
    eventId: z.number().int(),
    sellerId: z.string(),
    tickets: z.array(z.object({
        section: z.string(),
        row: z.string(),
        seat: z.string(),
    })),
    // section: z.string(),
    // row: z.string(),
    // seat: z.string(),
    pricePerTicket: z.coerce.number(),
    payoutMethod: z.nativeEnum(PayoutMethodEnum)
})

export type SaleFormObjectType = z.infer<typeof saleFormSchema>

export type SaleFormType = UseFormReturn<SaleFormObjectType, any, undefined>


