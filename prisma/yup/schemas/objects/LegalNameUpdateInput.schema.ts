// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PersonalDetailsUpdateOneRequiredWithoutNameNestedInputObjectSchema } from '../internals';

export const LegalNameUpdateInputObjectSchema = Yup.object({
    first: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  middle: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  last: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  personalDetails: PersonalDetailsUpdateOneRequiredWithoutNameNestedInputObjectSchema
});
