// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumUSSTATENullableWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedEnumUSSTATENullableFilterObjectSchema } from '../internals';

export const EnumUSSTATENullableWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumUSSTATENullableWithAggregatesFilterObjectSchema]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedEnumUSSTATENullableFilterObjectSchema,  _max: NestedEnumUSSTATENullableFilterObjectSchema
});
