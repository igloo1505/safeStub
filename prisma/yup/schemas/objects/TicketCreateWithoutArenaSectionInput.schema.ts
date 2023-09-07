// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedOneWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from '../internals';

export const TicketCreateWithoutArenaSectionInputObjectSchema = Yup.object({
    Event: EventCreateNestedOneWithoutTicketsInputObjectSchema,  TicketGroup: TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema
});
