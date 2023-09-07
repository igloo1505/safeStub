// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema } from '../internals';

export const TicketGroupUpdateWithoutTicketsInputObjectSchema = Yup.object({
    seatedTogether: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  Event: EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema
});
