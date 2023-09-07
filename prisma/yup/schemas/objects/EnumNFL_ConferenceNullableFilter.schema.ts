// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumNFL_ConferenceNullableFilterObjectSchema } from '../internals';

export const EnumNFL_ConferenceNullableFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumNFL_ConferenceNullableFilterObjectSchema])
});
