// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupCreateManyEventInputObjectSchema } from '../internals';

export const TicketGroupCreateManyEventInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TicketGroupCreateManyEventInputObjectSchema,
Yup.array().of(TicketGroupCreateManyEventInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
