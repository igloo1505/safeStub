// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from '../internals';

export const TicketGroupCreateInputObjectSchema = Yup.object({
    seatedTogether: Yup.boolean().required(),  Event: EventCreateNestedOneWithoutTicketGroupsInputObjectSchema,  tickets: TicketCreateNestedManyWithoutTicketGroupInputObjectSchema
});
