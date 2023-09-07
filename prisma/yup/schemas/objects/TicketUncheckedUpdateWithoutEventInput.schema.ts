// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableIntFieldUpdateOperationsInputObjectSchema } from '../internals';

export const TicketUncheckedUpdateWithoutEventInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  ticketGroupId: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  arenaSectionId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema])
});
