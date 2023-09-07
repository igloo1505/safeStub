// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedEnumNFL_ConferenceNullableFilterObjectSchema } from '../internals';

export const NestedEnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedEnumNFL_ConferenceNullableFilterObjectSchema,  _max: NestedEnumNFL_ConferenceNullableFilterObjectSchema
});
