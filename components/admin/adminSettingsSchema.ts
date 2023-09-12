import { z } from 'zod';



export interface ExpenseType {
    expense_name: string
    expense_priority: string
    expense_sources: string[]
    expense_source_input: string
    expense_cost: string
}


interface AdminSettings extends ExpenseType {

}

/// @ts-ignore
export const adminSettingsSchema: z.ZodType<ExpenseType> = z.object({
    expense_priority: z.string().default(""),
    expense_name: z.string().default(""),
    expense_sources: z.string().array().default([]),
    expense_source_input: z.string().default(""),
    expense_cost: z.string().default("")
}).strict()
