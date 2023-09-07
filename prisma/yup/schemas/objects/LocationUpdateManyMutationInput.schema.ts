// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableIntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableEnumUSSTATEFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumCountryFieldUpdateOperationsInputObjectSchema } from '../internals';

export const LocationUpdateManyMutationInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  street: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  zip: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  city: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  cityId: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  state: Yup.mixed().oneOfSchemas([NullableEnumUSSTATEFieldUpdateOperationsInputObjectSchema]),  lat: Yup.mixed().oneOfSchemas([Yup.number(),
NullableFloatFieldUpdateOperationsInputObjectSchema]),  long: Yup.mixed().oneOfSchemas([Yup.number(),
NullableFloatFieldUpdateOperationsInputObjectSchema]),  country: Yup.mixed().oneOfSchemas([EnumCountryFieldUpdateOperationsInputObjectSchema])
});
