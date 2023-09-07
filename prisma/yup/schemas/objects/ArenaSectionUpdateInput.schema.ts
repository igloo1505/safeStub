// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from '../internals';;
import { TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema } from '../internals';

export const ArenaSectionUpdateInputObjectSchema = Yup.object({
    name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  Arena: ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema,  Ticket: TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema
});
