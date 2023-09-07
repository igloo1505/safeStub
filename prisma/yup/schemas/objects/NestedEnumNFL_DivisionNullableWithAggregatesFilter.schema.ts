// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedEnumNFL_DivisionNullableFilterObjectSchema } from '../internals';

export const NestedEnumNFL_DivisionNullableWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumNFL_DivisionNullableWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedEnumNFL_DivisionNullableFilterObjectSchema,  _max: NestedEnumNFL_DivisionNullableFilterObjectSchema
});
