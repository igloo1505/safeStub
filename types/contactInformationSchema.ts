
import { z } from "zod"

export interface ContactInformationType {
    firstName: string
    lastName: string
    email: string
    phone: number
}

export const contactInformationSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email("This must be a valid email.").optional(),
    phone: z.string().optional(),
    id: z.string()
})


export type ContactInformationFormType = z.infer<typeof contactInformationSchema>
