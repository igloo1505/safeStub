// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from '../internals';

export const TicketGroupCreateWithoutEventInputObjectSchema = Yup.object({
    seatedTogether: Yup.boolean().required(),  tickets: TicketCreateNestedManyWithoutTicketGroupInputObjectSchema
});
