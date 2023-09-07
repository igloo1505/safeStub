// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from '../internals';;
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema } from '../internals';

export const TicketUpdateInputObjectSchema = Yup.object({
    Event: EventUpdateOneWithoutTicketsNestedInputObjectSchema,  TicketGroup: TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema,  arenaSection: ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema
});
