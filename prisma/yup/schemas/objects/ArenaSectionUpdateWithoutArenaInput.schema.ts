// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema } from '../internals';

export const ArenaSectionUpdateWithoutArenaInputObjectSchema = Yup.object({
    name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  Ticket: TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema
});
