// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateManyWithoutTicketGroupNestedInputObjectSchema } from '../internals';

export const TicketGroupUncheckedUpdateWithoutEventInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  seatedTogether: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  tickets: TicketUncheckedUpdateManyWithoutTicketGroupNestedInputObjectSchema
});
