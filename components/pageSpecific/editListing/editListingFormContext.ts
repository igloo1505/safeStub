import { UseFormReturn } from "react-hook-form"
import { z } from "zod"

export enum PayoutMethodEnum {
    paypal = "paypal"
}


export const editTransactionForm = z.object({
    quantity: z.number().int().min(1),
    eventId: z.number().int(),
    sellerId: z.string(),
    tickets: z.array(z.object({
        section: z.string(),
        row: z.string(),
        seat: z.string(),
        ticketNumber: z.string().optional()
    })),
    pricePerTicket: z.coerce.number(),
    payoutMethod: z.nativeEnum(PayoutMethodEnum),
    postedOn: z.union([z.date().optional(), z.string().optional()]).optional()
})

export type EditTransactionFormObjectType = z.infer<typeof editTransactionForm>

export type EditTransactionFormType = UseFormReturn<EditTransactionFormObjectType, any, undefined>


