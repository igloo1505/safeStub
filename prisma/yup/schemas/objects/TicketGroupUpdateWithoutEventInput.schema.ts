// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema } from '../internals';

export const TicketGroupUpdateWithoutEventInputObjectSchema = Yup.object({
    seatedTogether: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  tickets: TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema
});
