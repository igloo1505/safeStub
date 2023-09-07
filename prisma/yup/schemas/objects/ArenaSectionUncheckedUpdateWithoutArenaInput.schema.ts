// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateManyWithoutArenaSectionNestedInputObjectSchema } from '../internals';

export const ArenaSectionUncheckedUpdateWithoutArenaInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  Ticket: TicketUncheckedUpdateManyWithoutArenaSectionNestedInputObjectSchema
});
