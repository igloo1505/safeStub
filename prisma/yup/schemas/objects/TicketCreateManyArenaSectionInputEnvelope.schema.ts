// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateManyArenaSectionInputObjectSchema } from '../internals';

export const TicketCreateManyArenaSectionInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TicketCreateManyArenaSectionInputObjectSchema,
Yup.array().of(TicketCreateManyArenaSectionInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
