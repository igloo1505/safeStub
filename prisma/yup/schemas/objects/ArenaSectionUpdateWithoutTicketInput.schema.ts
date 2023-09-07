// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from '../internals';

export const ArenaSectionUpdateWithoutTicketInputObjectSchema = Yup.object({
    name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  Arena: ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema
});
