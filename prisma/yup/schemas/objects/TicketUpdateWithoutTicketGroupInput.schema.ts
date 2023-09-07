// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema } from '../internals';

export const TicketUpdateWithoutTicketGroupInputObjectSchema = Yup.object({
    Event: EventUpdateOneWithoutTicketsNestedInputObjectSchema,  arenaSection: ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema
});
