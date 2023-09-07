// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from '../internals';

export const TicketGroupCreateWithoutTicketsInputObjectSchema = Yup.object({
    seatedTogether: Yup.boolean().required(),  Event: EventCreateNestedOneWithoutTicketGroupsInputObjectSchema
});
