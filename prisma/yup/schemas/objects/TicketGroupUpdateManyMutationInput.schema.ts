// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';

export const TicketGroupUpdateManyMutationInputObjectSchema = Yup.object({
    seatedTogether: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema])
});
