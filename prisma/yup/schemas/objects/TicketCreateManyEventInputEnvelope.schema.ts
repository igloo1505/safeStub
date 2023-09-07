// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateManyEventInputObjectSchema } from '../internals';

export const TicketCreateManyEventInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TicketCreateManyEventInputObjectSchema,
Yup.array().of(TicketCreateManyEventInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
