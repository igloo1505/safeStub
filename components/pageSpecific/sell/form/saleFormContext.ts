import { SingleEventReturned } from "#/types/query"
import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormReturn, useForm } from "react-hook-form"
import { z } from "zod"



export const saleFormSchema = z.object({
    quantity: z.number().int().min(1),
    section: z.string(),
    row: z.string(),
    seat: z.string()
})

export type SaleFormObjectType = z.infer<typeof saleFormSchema>

export type SaleFormType = UseFormReturn<SaleFormObjectType, any, undefined>


