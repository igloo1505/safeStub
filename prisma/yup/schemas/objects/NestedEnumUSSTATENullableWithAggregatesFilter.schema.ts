// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedEnumUSSTATENullableFilterObjectSchema } from '../internals';

export const NestedEnumUSSTATENullableWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumUSSTATENullableWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedEnumUSSTATENullableFilterObjectSchema,  _max: NestedEnumUSSTATENullableFilterObjectSchema
});
