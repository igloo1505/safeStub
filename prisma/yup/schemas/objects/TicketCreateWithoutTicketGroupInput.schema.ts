// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedOneWithoutTicketsInputObjectSchema } from '../internals';;
import { ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema } from '../internals';

export const TicketCreateWithoutTicketGroupInputObjectSchema = Yup.object({
    Event: EventCreateNestedOneWithoutTicketsInputObjectSchema,  arenaSection: ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema
});
