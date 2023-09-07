// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from '../internals';;
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from '../internals';

export const TicketUpdateWithoutArenaSectionInputObjectSchema = Yup.object({
    Event: EventUpdateOneWithoutTicketsNestedInputObjectSchema,  TicketGroup: TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema
});
