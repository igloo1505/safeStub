// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableIntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableEnumUSSTATEFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumCountryFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from '../internals';

export const LocationUncheckedUpdateInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  uniqueKey: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  street: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  zip: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  city: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  cityId: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  state: Yup.mixed().oneOfSchemas([NullableEnumUSSTATEFieldUpdateOperationsInputObjectSchema]),  lat: Yup.mixed().oneOfSchemas([Yup.number(),
NullableFloatFieldUpdateOperationsInputObjectSchema]),  long: Yup.mixed().oneOfSchemas([Yup.number(),
NullableFloatFieldUpdateOperationsInputObjectSchema]),  country: Yup.mixed().oneOfSchemas([EnumCountryFieldUpdateOperationsInputObjectSchema]),  userId: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  arena: ArenaUncheckedUpdateManyWithoutLocationNestedInputObjectSchema
});
