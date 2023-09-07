// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedOneWithoutTicketsInputObjectSchema } from '../internals';;
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from '../internals';;
import { ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema } from '../internals';

export const TicketCreateInputObjectSchema = Yup.object({
    Event: EventCreateNestedOneWithoutTicketsInputObjectSchema,  TicketGroup: TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema,  arenaSection: ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema
});
