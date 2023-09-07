// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedEnumNFL_ConferenceNullableFilterObjectSchema } from '../internals';

export const EnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedEnumNFL_ConferenceNullableFilterObjectSchema,  _max: NestedEnumNFL_ConferenceNullableFilterObjectSchema
});
