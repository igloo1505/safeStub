// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateManyTicketGroupInputObjectSchema } from '../internals';

export const TicketCreateManyTicketGroupInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TicketCreateManyTicketGroupInputObjectSchema,
Yup.array().of(TicketCreateManyTicketGroupInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
