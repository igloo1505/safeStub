// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutColorsNestedInputObjectSchema } from '../internals';

export const ColorsUpdateInputObjectSchema = Yup.object({
    primary: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  secondary: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  Team: TeamUpdateManyWithoutColorsNestedInputObjectSchema
});
